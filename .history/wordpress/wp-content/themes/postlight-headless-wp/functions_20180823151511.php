<?php

/**
 * Enqueue scripts and styles.
 *
 * @since Celestial 1.0
 */

if (!function_exists('cdl_com_setup')) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function cdl_com_setup()
{
                /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on cdl-com, use a find and replace
     * to change 'cdl-com' to the name of your theme in all the template files.
     */
        
                // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');
        
                /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support('title-tag');
        
                /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');
        
                // This theme uses wp_nav_menu() in one location.
    register_nav_menus(array(
        'menu-1' => esc_html__('Primary'),
    ));
        
                /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
        
                // Set up the WordPress core custom background feature.
    add_theme_support('custom-background', apply_filters('cdl_com_custom_background_args', array(
        'default-color' => 'ffffff',
        'default-image' => '',
    )));
        
                // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support('custom-logo', array(
        'height' => 250,
        'width' => 250,
        'flex-width' => true,
        'flex-height' => true,
    ));
}
endif;
add_action('after_setup_theme', 'cdl_com_setup');
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