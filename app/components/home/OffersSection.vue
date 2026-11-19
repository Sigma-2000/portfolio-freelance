<script setup lang="ts">
const offers = [
  {
    number: "01",
    label: "STRATÉGIE & ACCOMPAGNEMENT",
    title: "Clarifier, améliorer, faire durer.",
    description:
      "Du premier audit aux améliorations et au suivi de votre site, je vous accompagne à chaque étape.",
    points: ["Audit", "Refonte ciblée, Maintenance"],
    slug: "strategie",
    theme: "strategy",
    icon: "target",
  },
  {
    number: "02",
    label: "SITES WEB",
    title: "Créer une présence singulière",
    description:
      "Sites vitrines pensés pour présenter clairement votre activité et valoriser votre univers.",
    points: ["Site Essentiel", "Site Signature", "Sur-mesure"],
    slug: "sites-vitrines",
    theme: "web",
    icon: "window",
  },
  {
    number: "03",
    label: "E-COMMERCE",
    title: "Vendre en ligne",
    description:
      "Boutiques e-commerce fluides, rassurantes et conçues pour mettre vos produits en valeur.",
    points: ["Shopify", "Sur-mesure", "Parcours d’achat"],
    slug: "boutiques-e-commerce",
    theme: "commerce",
    icon: "bag",
  },
  {
    number: "04",
    label: "3D & DÉVELOPPEMENT SUR MESURE",
    title: "Explorer d’autres possibles",
    /**Photogrammétrie, objets 3D interactifs et fonctionnalités spécifiques pour des expériences qui sortent du cadre. */
    description:
      "Donnez une nouvelle dimension à votre présence en ligne grâce à la 3D interactive, à la photogrammétrie et à des fonctionnalités développées sur mesure.",
    points: [
      "3D",
      "Photogrammétrie",
      "Maintenance",
      "Fonctionnalités sur mesure",
    ],
    slug: "accompagnement-evolutions",
    theme: "lab",
    icon: "orbit",
  },
];
</script>

<template>
  <section id="offres" class="offers-section" aria-labelledby="offers-title">
    <div class="offers-section__heading">
      <div>
        <p class="offers-section__eyebrow">02 / MES OFFRES</p>
        <h2 id="offers-title" class="offers-section__title">
          Des offres pensées pour faire
          <em>évoluer</em> votre présence en ligne.
        </h2>
      </div>

      <p class="offers-section__intro">
        Qu’il s’agisse de créer, refondre, vendre ou faire évoluer, chaque offre
        répond à un besoin précis.
      </p>
    </div>

    <div class="offers-section__grid">
      <NuxtLink
        v-for="offer in offers"
        :key="offer.slug"
        :to="`/offres/${offer.slug}`"
        class="offer-card"
        :class="[
          `offer-card--${offer.theme}`,
          `offer-card--icon-${offer.icon}`,
        ]"
      >
        <div class="offer-card__top">
          <p class="offer-card__meta">{{ offer.number }} / {{ offer.label }}</p>
          <span class="offer-card__corner" aria-hidden="true">↗</span>
        </div>

        <div class="offer-card__visual" aria-hidden="true">
          <span class="offer-card__shape offer-card__shape--a"></span>
          <span class="offer-card__shape offer-card__shape--b"></span>
          <span class="offer-card__shape offer-card__shape--c"></span>
        </div>

        <h3 class="offer-card__title">{{ offer.title }}</h3>

        <p class="offer-card__description">
          {{ offer.description }}
        </p>

        <ul class="offer-card__points" aria-label="Points clés de l’offre">
          <li v-for="point in offer.points" :key="point">
            {{ point }}
          </li>
        </ul>

        <div class="offer-card__link">
          <span>Découvrir l’offre</span>
          <span class="offer-card__arrow" aria-hidden="true">↗</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
