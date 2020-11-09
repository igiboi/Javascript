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
define( 'DB_NAME', 'college' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.i6Bkb_UC/8i?}5nXfBAUkyXH}:v_yH[`*?bYNl`;o4#mv1_+-b=@e{oxJs5c)oX' );
define( 'SECURE_AUTH_KEY',  'SqkxejJV}!z0%eye?yESf}-XyJZ/1{MbP$5v1<+N2~aLBDhO]_-|qvTO#,!4?ID>' );
define( 'LOGGED_IN_KEY',    'jR2&}fg_Zmru[q}v*<U;zG%_>W}F9we7-_i!}DgpT)1kTf[&8UZA1Q1XWFib]}ba' );
define( 'NONCE_KEY',        'RJ5HO>^Z9b6aKc5R6PuVe(9O%jWC9^^^{;UlVmb&m95?%vL#ZHz}:wkXaRNue<2B' );
define( 'AUTH_SALT',        '13;U[Ug2@<~Bb%YssNY)M/ <>+_;:u/|G5:4n)34Goz!JF%uH-,D;W@A3.v0wI?[' );
define( 'SECURE_AUTH_SALT', '*e:C>sG_vT7~gMaw/ti)]lkxU!q/*?K5d6Q/F=(T~O*tM*U$vO}PgUAL*Csp[7HI' );
define( 'LOGGED_IN_SALT',   '~sEX64d5^,3!lO%KrwH!Hjn;TRN-Xj0C:!&0`TnG#f=nyKQs_5Wp`N:$b#ft9;D;' );
define( 'NONCE_SALT',       'vWd6_msJzUDb:$srl_wG{kLhXm[pEu/6`kDRP<;EVCnPBqLX>{L~(.uObF};K_sc' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
