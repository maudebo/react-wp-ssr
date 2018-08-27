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