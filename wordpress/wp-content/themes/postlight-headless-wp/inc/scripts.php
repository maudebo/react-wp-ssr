<?php

function postlight_headless_wp_scripts()
{
    wp_enqueue_style('postlight-headless-wp-style', get_stylesheet_uri());

	// Load our main stylesheet.
    wp_enqueue_style('bootstrap-style', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css');
    wp_enqueue_style('postlight-headless-wp-style-dist', get_stylesheet_directory_uri() . '/dist/style.css');

    // Load scripts
	//wp_enqueue_script( 'jquery', 'https://code.jquery.com/jquery-3.2.1.slim.min.js', '20171006', false );	
    wp_enqueue_script('scrollmagic', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js', array('jquery'), '1.0', false);    
	//wp_enqueue_script( 'popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js', array( 'jquery' ), '20171006', false );
    //wp_enqueue_script( 'bootstrap-script', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js', array( 'jquery' ), '20171006', false );


    $url = trailingslashit(site_url());
    $path = trailingslashit(parse_url($url, PHP_URL_PATH));

     wp_scripts()->add_data('postlight-headless-wp-script', 'data', sprintf('var PostlightSettings = %s;', wp_json_encode(array(
         'title' => get_bloginfo('name', 'display'),
        'path' => $path,
         'URL' => array(
             'api' => esc_url_raw(get_rest_url(null, '/wp/v2/')),
             'root' => esc_url_raw($url),
         ),
    //     'woo' => array(
    //         'url' => esc_url_raw('https://localhost/celestial/wp-json/wc/v2/'),
    //         'consumer_key' => 'ck_4c897a273bde1274df0325247804ceeb8b09334d',
    //         'consumer_secret' => 'cs_b1f81580f8f03ff383b7d655e889c26464639064'
    //     ),
    // ))));
))));
}
add_action('wp_enqueue_scripts', 'postlight_headless_wp_scripts');