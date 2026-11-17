<script setup lang="ts">
const pillars = [
  {
    title: "Design",
    text: "Direction visuelle, interfaces sur mesure et expériences utilisateur pensées pour répondre à vos objectifs.",
  },
  {
    title: "Développement",
    text: "Du front-end aux fonctionnalités back-end : interfaces responsive, intégrations d’API, traitement des données et développement de fonctionnalités adaptées à vos besoins.",
  },
  {
    title: "Déploiement",
    text: "Mise en ligne, configuration technique, tests et ajustements pour livrer un site prêt à être utilisé et à évoluer.",
  },
];
</script>

<template>
  <section id="a-propos" class="about-section">
    <div class="about-section__inner">
      <div class="about-section__heading">
        <p class="about-section__eyebrow">03 / À propos</p>

        <h2 class="about-section__title">
          Du design au développement,
          <em>jusqu’à la mise en ligne.</em>
        </h2>

        <p class="about-section__intro">
          Je conçois des interfaces claires et singulières, puis je les
          développe et les déploie pour donner vie à des sites cohérents, utiles
          et durables.
        </p>
      </div>

      <div class="about-section__grid">
        <article
          v-for="pillar in pillars"
          :key="pillar.title"
          class="about-card"
        >
          <h3 class="about-card__title">{{ pillar.title }}</h3>
          <p class="about-card__text">{{ pillar.text }}</p>
        </article>
      </div>
      <div class="about-section__story">
        <div class="about-section__story-heading">
          <p class="about-section__story-eyebrow">Un parcours pluriel</p>
          <h3 class="about-section__story-title">
            D’autres expériences, <em>un autre regard.</em>
          </h3>
        </div>

        <div class="about-section__story-content">
          <p class="about-section__story-text">
            Avant le développement web, j’ai travaillé dans la vente, la
            communication et la médiation artistique. Ces expériences
            nourrissent aujourd’hui mon approche : comprendre les besoins,
            clarifier les messages et concevoir des expériences adaptées à leurs
            publics.
          </p>

          <!-- À activer lorsque la page sera créée -->
          <!--
    <NuxtLink to="/a-propos" class="about-section__story-link">
      Découvrir mon parcours <span aria-hidden="true">↗</span>
    </NuxtLink>
    -->
        </div>
      </div>
    </div>
  </section>
</template>
