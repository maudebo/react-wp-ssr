<?php

// Add a custom options page to associate ACF fields with

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Options générales',
        'menu_title' => 'Options générales',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}

function celestial_register_fields()
{
    register_rest_field('services', 'titre', array(
        'get_callback' => function ($post) {
            return get_field('titre');
        }
    ));
}


add_action('rest_api_init', 'celestial_register_fields');


