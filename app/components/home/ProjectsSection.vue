<script setup lang="ts">
// Contenu des cartes : facile à compléter plus tard.
const projects = [
  {
    number: "01",
    slug: "sigma-2000",
    category: "E-COMMERCE / ARTISTE",
    title: "Sigma.2000",
    description:
      "Une boutique e-commerce pensée pour mettre en valeur un univers artistique singulier.",
    image: "/projects/sigma2000.png",
    imageAlt: "Aperçu de la boutique e-commerce Sigma.2000",
    tags: ["E-commerce", "Design", "Développement"],
    theme: "sigma",
  },
  {
    number: "02",
    slug: "vizcab",
    category: "PRODUIT / SAAS",
    title: "Vizcab",
    description:
      "Des interfaces métier pour faciliter l'exploration et l'utilisation des données.",
    image: "/projects/vizcab.png",
    imageAlt: "Aperçu d'une interface du produit Vizcab",
    tags: ["SaaS", "Interface", "Data"],
    theme: "vizcab",
  },
];
</script>

<template>
  <section
    id="realisations"
    class="projects-section"
    aria-labelledby="projects-title"
  >
    <div class="projects-section__heading">
      <div>
        <p class="projects-section__eyebrow">01 / PROJETS SÉLECTIONNÉS</p>

        <h2 id="projects-title" class="projects-section__title">
          Des projets qui prennent
          <em>forme.</em>
        </h2>
      </div>

      <p class="projects-section__intro">
        Des expériences différentes, imaginées pour répondre à des besoins
        singuliers.
      </p>
    </div>

    <div class="projects-section__grid">
      <article
        v-for="project in projects"
        :key="project.number"
        class="project-card"
        :class="`project-card--${project.theme}`"
      >
        <!-- Grande image du projet -->
        <div class="project-card__visual">
          <img
            :src="project.image"
            :alt="project.imageAlt"
            class="project-card__image"
            loading="lazy"
            width="1200"
            height="900"
          />

          <span class="project-card__index">
            {{ project.number }}
          </span>
        </div>

        <!-- Informations du projet -->
        <div class="project-card__content">
          <p class="project-card__category">
            {{ project.category }}
          </p>

          <h3 class="project-card__title">
            {{ project.title }}
          </h3>

          <p class="project-card__description">
            {{ project.description }}
          </p>

          <div class="project-card__footer">
            <ul
              class="project-card__tags"
              aria-label="Compétences et catégories"
            >
              <li v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </li>
            </ul>

            <NuxtLink
              :to="`/projets/${project.slug}`"
              class="project-card__link"
              :aria-label="`Découvrir le projet ${project.title}`"
            >
              <span>Découvrir le projet</span>

              <span class="project-card__arrow" aria-hidden="true"> ↗ </span>
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
