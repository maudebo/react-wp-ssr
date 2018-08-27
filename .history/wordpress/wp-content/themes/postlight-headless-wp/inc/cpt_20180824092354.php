<?php

function service()
{
    register_post_type(
        'Service',
        array(
            'labels' => array(
                'name' => __('Service'),
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
            'rewrite' => array('slug' => 'service', 'with_front' => false),
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


/**
 * Add REST API support to an already registered post type.
 */
add_action(' init ', ' my_custom_post_type_rest_support ', 25);
function my_custom_post_type_rest_support()
{
    global $wp_post_types;
  
  	//be sure to set this to the name of your post type!
    $post_type_name = ' service ';
    if (isset($wp_post_types[$post_type_name])) {
        $wp_post_types[$post_type_name]->show_in_rest = true;
        $wp_post_types[$post_type_name]->rest_base = $post_type_name;
        $wp_post_types[$post_type_name]->rest_controller_class = ' WP_REST_Posts_Controller';
    }

}