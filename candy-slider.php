<?php
/**
 * Plugin Name: Candy Slider
 * Plugin URI: http://themantiko.com
 * Description: Candy Slider allows you to add a Gutenberg slider block to your WordPress content.
 * Author: Themantiko
 * Author URI: http://themantiko.com/
 * Version: 1.0.2
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package Candy Slider
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
define( 'CSGB_URI', trailingslashit( plugin_dir_url( __FILE__ ) ) );
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @since 1.0.0
 */
function csgb_block_assets() {
	// Styles.
	wp_enqueue_style( 'csgb-swiper-css', CSGB_URI . 'lib/swiper/swiper.min.css' );
	wp_enqueue_style('font-awesome', CSGB_URI . 'lib/css/fontawesome.min.css' );
	wp_enqueue_style( 'csgb-style-css', CSGB_URI . 'dist/blocks.style.build.css' );
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'csgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function csgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'csgb-block-js', // Handle.
		CSGB_URI . 'dist/blocks.build.js', // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);
	// Styles.
	wp_enqueue_style(
		'csgb-block-editor-css', // Handle.
		CSGB_URI . 'dist/blocks.editor.build.css', // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'csgb_editor_assets' );

function csgb_assets() {
	wp_enqueue_script(
		'csgb-swiper-js', // Handle.
		CSGB_URI . 'lib/swiper/swiper.js',
		array( 'jquery' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
	);
	wp_enqueue_script(
		'csgb-slider-js', // Handle.
		CSGB_URI . 'lib/js/slider.js',
		array( 'jquery', 'csgb-swiper-js' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
	);
}
// Hook: Editor assets.
add_action( 'enqueue_block_assets', 'csgb_assets' );
