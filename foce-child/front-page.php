<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <!-- <video id="background_video" autoplay loop muted> 
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/medias/studio_koukaki_video.mp4'; ?> " type="video/mp4">
            </video> -->
            <!-- Ajout de mon background du header -->
            <img id="background_header" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/banner.png'; ?> " alt="fond d'écran chat">
            <div id="logo">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
        </section>
        <section id="story" class="story">
            <!-- Ajout de mon background de titre section Histoire -->
            <img class="background_story" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/background_story.png'; ?> " alt="fond d'écran bleu du titre de la section Histoire">
            <h2 class="title_story title_anim">L'histoire</h2>
            <!-- Ajout de l'image de fleur + tige section Histoire -->
            <img class="feuille_story" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/feuilles_story.png'; ?> " alt="tige et feuille">
            <img class="fleur_story" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/sunflower.png'; ?> " alt="fleur de type marguerite">
            

            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters">
                <div class="main-character">
                    <!-- Ajout de mon background du titre section personnage -->
                    <img class="background_perso" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/background_personnage.png'; ?> " alt="fond d'écran orange du titre de la section Personnage">
                    <h3 class="title_perso title_anim">Les personnages</h3>
                    <!-- Insertion de mon template personnage avec le caroussel swiper -->
                    <?php get_template_part( '/templates/section_personnages' ); ?>

                    <?php
                    /*
                    $main_character = $characters_query->posts[0];
                    echo '<figure>';
                    echo get_the_post_thumbnail( $main_character->ID, 'full' );
                    echo '<figcaption>'. $main_character->post_title . '</figcaption>';
                    echo '</figure>';
                    $characters_query->next_post();
                    ?>
                </div>
                <div class="other-characters">
                    <?php
                    while ( $characters_query->have_posts() ) {
                        $characters_query->the_post();
                        echo '<figure>';
                        echo get_the_post_thumbnail( get_the_ID(), 'full' );
                        echo '<figcaption>';
                        the_title();
                        echo'</figcaption>';
                        echo '</figure>';
                    }
                    */
                    ?>
                </div>
            </article>
            <article id="place">
                <div>
                    <!-- Ajout de mon background de titre section Lieu -->
                    <img class="background_lieu" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/background_lieu.png'; ?> " alt="fond d'écran orange du titre de la section Lieu">
                    <h3 class="title_lieu title_anim">Le Lieu</h3>
                    <img class="big_cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?> " alt="image d'un gros nuage">
                    <img class="little_cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="image d'un petit nuage">
                    <p><?php echo get_theme_mod('place'); ?></p>
                    
                </div>

            </article>
        </section>


        <section id="studio">
            <h2 class="title_studio title_anim">Studio Koukaki</h2>
            <!-- <img class="background_studio" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/background_studio.png'; ?> " alt="arrière plan bleu du titre de la section Story"> -->
            <div>
                <p>Acteur majeur de l'animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d'innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d'oranger et chats errants”.</p>
            </div>
            </section>
    </main><!-- #main -->

<?php

get_footer();
