<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'react-wp-ssr');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'toor');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/:fkWm%miFQX|=Xz`5leZ>-:Ab7v5[;)heQx-Zjep7QMZzuyboyOf&X;*aRR>LtW');
define('SECURE_AUTH_KEY',  'sKcKJ&K;_BOtsTcS}9u3~p5=ZN$d~J$0(vjvO;e|2OCR2wy0lVbo<*xFn^5Fn_m$');
define('LOGGED_IN_KEY',    '@|*SmMR5SZ3%v:nT!tpuUiS&i8TOHEa?.lFU9lP7pfIf0)3#)fscb^LL?UIPF!3R');
define('NONCE_KEY',        '8J*,PVXMpFZ*l(z]{N^nM,D3:&9Scg+i+op6P3-~Dn{lx>c^!I;ezZ}KnERH`ycw');
define('AUTH_SALT',        'zK@YV*soDAGzjyYWa<59I{Uiz?L+?D;YZE.F&Bb:)?,BF|-fz`/BU7ST(,4.)qw<');
define('SECURE_AUTH_SALT', 'G`KciwyR{Ol/TkOc.9*h)&L-*&342!,=Bdq9r}cBP@Iiri$*$$[!-EBb#h~&26J&');
define('LOGGED_IN_SALT',   '&*PYmod<`Z2><1aj7:^`(qmf($3U=M,T%<x+w%$y d1J63hmMe^,eq2lJ_@ZxHdc');
define('NONCE_SALT',       'Y~U&:S8qFm`seff#acK5kf.ts:.#|Abx5:1y4tgRTxGB&rlahUFS<n?56Amrk`N!');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
