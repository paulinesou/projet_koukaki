<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

	<footer id="colophon" class="site-footer">

        <!-- Integration de mon template section des oscars -->
        <?php get_template_part( '/templates/section_oscars' ); ?>

        <ul>
            <li><a href="#">Mentions Légales</a></li>
            <li><a href="#">STUDIO KOUKAKI</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
  
</body>
</html>
