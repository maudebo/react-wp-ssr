<?php

// Frontend origin
require_once 'inc/frontend-origin.php';

// ACF commands
require_once 'inc/class-acf-commands.php';

// Logging functions
require_once 'inc/log.php';

// CORS handling
require_once 'inc/cors.php';

// Admin modifications
require_once 'inc/admin.php';

// Add Menus
require_once 'inc/menus.php';

// Add Headless Settings area
require_once 'inc/acf-options.php';

// Add custom API endpoints
require_once 'inc/api-routes.php';

function service()
{
    register_post_type(
        'Services',
        array(
            'labels' => array(
                'name' => __('Services'),
                'singular_name' => __('Service'),
                'add_new' => __('Ajouter un service'),
                'add_new_item' => __('Ajouter un nouveau service'),
                'edit' => __('Changer'),
                'edit_item' => __('Modifier le service'),
                'new_item' => __('Nouveau service'),
                'view' => __('Voir'),
                'view_item' => __('Voir la fiche du service'),
                'search_items' => __('Rechercher un service'),
                'not_found' => __('Aucun service'),
                'not_found_in_trash' => __('Aucun service trouvé dans la corbeille')
            ),
            'public' => true,
            'publicly_queryable' => true,
            'hierarchical' => false,
            'has_archive' => true,
            'capability_type' => 'post',
            'menu_icon' => "dashicons-hammer",
            'rewrite' => array('slug' => 'services', 'with_front' => false),
            'menu_position' => 30,
            'show_in_rest' => true,
            'rest_base' => 'services',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            'taxonomies' => array('post_tag'),
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
            'can_export' => true,
        )
    );
}

add_action('init', 'service');
