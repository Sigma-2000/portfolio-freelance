<script setup lang="ts">
import type { PortfolioProject } from "~/data/projects";

const props = defineProps<{
  project: PortfolioProject;
  nextProject?: PortfolioProject;
}>();
</script>

<template>
  <article class="case-study" :class="`case-study--${props.project.theme}`">
    <!-- En-tête -->
    <header class="case-study__hero">
      <div class="case-study__container">
        <NuxtLink to="/#realisations" class="case-study__back">
          <span aria-hidden="true">←</span> Retour aux réalisations
        </NuxtLink>

        <div class="case-study__eyebrow-row">
          <p class="case-study__eyebrow">{{ project.number }} / ÉTUDE DE CAS</p>
          <p class="case-study__category">{{ project.category }}</p>
        </div>

        <h1 class="case-study__name">{{ project.name }}</h1>
        <p class="case-study__headline">
          {{ project.headline }} <em>{{ project.headlineAccent }}</em>
        </p>

        <div class="case-study__hero-bottom">
          <p class="case-study__lead">{{ project.introduction }}</p>
          <a
            class="case-study__external"
            :href="project.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ project.externalLabel }} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="case-study__tags" aria-label="Technologies et domaines">
          <span v-for="tag in project.tags" :key="tag" class="case-study__tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </header>

    <!-- Couverture -->
    <div class="case-study__container">
      <div class="case-study__overview">
        <figure class="case-study__cover">
          <img
            :src="project.cover"
            :alt="project.coverAlt"
            fetchpriority="high"
          />
        </figure>

        <dl class="case-study__facts">
          <div
            v-for="item in project.context"
            :key="item.label"
            class="case-study__fact"
          >
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Le récit -->
    <div class="case-study__story">
      <section
        v-for="section in project.sections"
        :id="section.id"
        :key="section.id"
        class="case-study__section"
        :class="{ 'case-study__section--soft': section.tone === 'soft' }"
        :aria-labelledby="`${project.slug}-${section.id}`"
      >
        <div class="case-study__container">
          <div
            class="case-study__section-grid"
            :class="{
              'case-study__section-grid--text-only': !section.image,
            }"
          >
            <!-- Titre et paragraphes dans la même colonne -->
            <div class="case-study__section-content">
              <div class="case-study__section-heading">
                <p class="case-study__eyebrow">
                  {{ section.eyebrow }}
                </p>

                <h2
                  :id="`${project.slug}-${section.id}`"
                  class="case-study__section-title"
                >
                  {{ section.title }}
                </h2>
              </div>

              <div class="case-study__section-body">
                <p v-for="(paragraph, i) in section.paragraphs" :key="i">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <!-- Image à côté du texte sur desktop -->
            <figure v-if="section.image" class="case-study__figure">
              <img
                :src="section.image"
                :alt="section.imageAlt || ''"
                loading="lazy"
              />

              <figcaption v-if="section.imageCaption">
                {{ section.imageCaption }}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>

    <!-- Synthèse technique -->
    <section
      class="case-study__summary"
      aria-labelledby="case-study-summary-title"
    >
      <div class="case-study__container case-study__summary-grid">
        <div>
          <p class="case-study__eyebrow">EN RÉSUMÉ</p>
          <h2 id="case-study-summary-title" class="case-study__section-title">
            Ce que j’ai réalisé.
          </h2>
        </div>
        <div class="case-study__summary-columns">
          <div>
            <h3>Technologies & environnement</h3>
            <ul>
              <li v-for="item in project.technology" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div>
            <h3>Mon intervention</h3>
            <ul>
              <li v-for="item in project.role" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Passerelle vers une offre, sans renvoyer directement au contact -->
    <div class="case-study__container">
      <aside class="case-study__related" aria-label="Offre associée">
        <div>
          <p class="case-study__eyebrow">{{ project.relatedOffer.label }}</p>
          <h2 class="case-study__related-title">
            {{ project.relatedOffer.title }}
          </h2>
          <p class="case-study__related-text">
            {{ project.relatedOffer.text }}
          </p>
        </div>
        <NuxtLink
          class="case-study__related-link"
          :to="project.relatedOffer.to"
        >
          Découvrir l’offre <span aria-hidden="true">↗</span>
        </NuxtLink>
      </aside>

      <nav
        class="case-study__pagination"
        aria-label="Navigation entre les projets"
      >
        <NuxtLink to="/#realisations" class="case-study__pagination-back"
          >← Tous les projets</NuxtLink
        >
        <NuxtLink
          v-if="nextProject"
          :to="`/projets/${nextProject.slug}`"
          class="case-study__pagination-next"
        >
          <span>PROJET SUIVANT</span>
          <strong
            >{{ nextProject.name }} <span aria-hidden="true">↗</span></strong
          >
        </NuxtLink>
      </nav>
    </div>
  </article>
</template>
