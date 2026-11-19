<script setup lang="ts">
const navigation = [
  { label: "Réalisations", to: "/#realisations" },
  { label: "Offres", to: "/#offres" },
  { label: "À propos", to: "/#a-propos" },
];

function scrollToTop() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__bottom">
        <div class="site-footer__identity">
          <!--<p class="site-footer__name">Amélie Guyot</p>-->
          <img
            src="/logos/logo-ag-white.svg"
            alt="logo-ag-white"
            class="site-footer__logo"
          />
          <p class="site-footer__description">
            Développement web · Design · Expériences interactives
          </p>
        </div>

        <button
          class="site-footer__back-top"
          type="button"
          aria-label="Retour en haut de la page"
          @click="scrollToTop"
        >
          <span aria-hidden="true">↑</span>
        </button>

        <div class="site-footer__links">
          <nav class="site-footer__nav" aria-label="Navigation de pied de page">
            <template v-for="(item, index) in navigation" :key="item.to">
              <span v-if="index > 0" aria-hidden="true">·</span>
              <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </template>
          </nav>

          <div class="site-footer__legal">
            <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
            <span aria-hidden="true">·</span>
            <NuxtLink to="/confidentialite">Confidentialité</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
