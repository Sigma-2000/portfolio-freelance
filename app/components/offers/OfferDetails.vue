<script setup lang="ts">
import type { OfferFamily } from "~/data/offers";
import { offerFamilies } from "~/data/offers";

const props = defineProps<{ family: OfferFamily }>();
const otherFamilies = computed(() =>
  offerFamilies.filter((item) => item.slug !== props.family.slug),
);
</script>

<template>
  <article class="offer-detail" :class="`offer-detail--${family.slug}`">
    <header class="offer-detail__hero">
      <div class="offer-detail__container">
        <NuxtLink to="/#offres" class="offer-detail__back">
          <span aria-hidden="true">←</span> Retour aux offres
        </NuxtLink>

        <div class="offer-detail__eyebrow-row">
          <p class="offer-detail__eyebrow">{{ family.number }} / MES OFFRES</p>
          <p class="offer-detail__category">{{ family.category }}</p>
        </div>

        <div class="offer-detail__hero-grid">
          <div>
            <h1 class="offer-detail__title">
              {{ family.name }} <em>{{ family.accent }}</em>
            </h1>
          </div>
          <div class="offer-detail__hero-aside">
            <p class="offer-detail__intro">{{ family.introduction }}</p>
            <p class="offer-detail__description">{{ family.description }}</p>
            <a class="offer-detail__inline-link" href="#details">
              Explorer les prestations <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div id="details" class="offer-detail__container offer-detail__content">
      <div class="offer-detail__contents">
        <p class="offer-detail__eyebrow">LES PRESTATIONS</p>
        <nav
          aria-label="Sommaire des prestations"
          class="offer-detail__contents-links"
        >
          <a
            v-for="offer in family.offers"
            :key="offer.id"
            :href="`#${offer.id}`"
          >
            {{ offer.title }} <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>

      <section
        v-for="(offer, index) in family.offers"
        :id="offer.id"
        :key="offer.id"
        class="offer-detail__service"
        :aria-labelledby="`${family.slug}-${offer.id}`"
      >
        <div class="offer-detail__service-heading">
          <p class="offer-detail__eyebrow">{{ offer.eyebrow }}</p>
          <h2
            :id="`${family.slug}-${offer.id}`"
            class="offer-detail__service-title"
          >
            {{ offer.title }}
          </h2>
        </div>

        <div class="offer-detail__service-main">
          <p class="offer-detail__hook">{{ offer.hook }}</p>
          <div class="offer-detail__copy">
            <p v-for="(paragraph, i) in offer.paragraphs" :key="i">
              {{ paragraph }}
            </p>
          </div>
          <div class="offer-detail__deliverables">
            <p class="offer-detail__eyebrow">CE QUE NOUS POUVONS PRÉVOIR</p>
            <ul>
              <li v-for="benefit in offer.benefits" :key="benefit">
                {{ benefit }}
              </li>
            </ul>
          </div>
          <p v-if="offer.note" class="offer-detail__note">{{ offer.note }}</p>
        </div>
        <span class="offer-detail__service-index" aria-hidden="true">
          {{ String(index + 1).padStart(2, "0") }}
        </span>
      </section>
    </div>

    <div v-if="family.relatedProject" class="offer-detail__container">
      <aside class="offer-detail__related" aria-label="Projet associé">
        <div>
          <p class="offer-detail__eyebrow">{{ family.relatedProject.label }}</p>
          <h2 class="offer-detail__related-title">
            {{ family.relatedProject.title }}
          </h2>
          <p class="offer-detail__related-text">
            {{ family.relatedProject.text }}
          </p>
        </div>
        <NuxtLink
          class="offer-detail__related-link"
          :to="family.relatedProject.to"
        >
          Voir l’étude de cas <span aria-hidden="true">↗</span>
        </NuxtLink>
      </aside>
    </div>

    <section
      class="offer-detail__contact"
      aria-labelledby="offer-contact-title"
    >
      <div class="offer-detail__container offer-detail__contact-inner">
        <div>
          <p class="offer-detail__eyebrow">UN BESOIN PARTICULIER ?</p>
          <h2 id="offer-contact-title" class="offer-detail__contact-title">
            Parlons de votre <em>projet.</em>
          </h2>
          <p>
            Chaque prestation se précise selon vos objectifs et le périmètre
            nécessaire.
          </p>
        </div>
        <NuxtLink class="offer-detail__contact-link" to="/#contact">
          Discutons de votre projet <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </section>

    <nav
      class="offer-detail__container offer-detail__pagination"
      aria-label="Autres familles d’offres"
    >
      <NuxtLink to="/#offres" class="offer-detail__back"
        >← Toutes les offres</NuxtLink
      >
      <div class="offer-detail__other-families">
        <NuxtLink
          v-for="item in otherFamilies"
          :key="item.slug"
          :to="`/offres/${item.slug}`"
        >
          {{ item.category }} <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </nav>
  </article>
</template>
