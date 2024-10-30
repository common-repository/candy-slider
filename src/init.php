<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package DGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @since 1.0.0
 */
function csgb_block_assets() {
	// Styles.
	wp_enqueue_style( 'csgb-swiper-css', plugins_url( 'lib/swiper/swiper.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style('font-awesome', plugins_url( 'lib/css/fontawesome.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'csgb-style-css', plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ) );
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
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);
	// Styles.
	wp_enqueue_style(
		'csgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'csgb_editor_assets' );

function csgb_assets() {
	wp_enqueue_script(
		'csgb-swiper-js', // Handle.
		plugins_url( '/lib/swiper/swiper.js', dirname( __FILE__ ) ),
		array( 'jquery' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
	);
	wp_enqueue_script(
		'csgb-slider-js', // Handle.
		plugins_url( '/lib/js/slider.js', dirname( __FILE__ ) ),
		array( 'jquery', 'csgb-swiper-js' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
	);
}
// Hook: Editor assets.
add_action( 'enqueue_block_assets', 'csgb_assets' );
