<script setup lang="ts">
import { ref } from "vue";
import MorphLogo from "../ui/MorphLogo.vue";

const isMenuOpen = ref(false);

const links = [
  { label: "Réalisations", to: "/#realisations" },
  { label: "Offres", to: "/#offres" },
  { label: "À propos", to: "/#a-propos" },
  { label: "Contact", to: "/#contact" },
];

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header class="site-header" :class="{ 'is-menu-open': isMenuOpen }">
    <MorphLogo />

    <button
      class="site-header__toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="site-navigation"
      :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span>{{ isMenuOpen ? "Fermer" : "Menu" }}</span>
      <span aria-hidden="true">{{ isMenuOpen ? "×" : "☰" }}</span>
    </button>

    <nav
      id="site-navigation"
      class="site-header__nav"
      :class="{ 'is-open': isMenuOpen }"
      aria-label="Navigation principale"
    >
      <NuxtLink
        v-for="(link, index) in links"
        :key="link.to"
        :to="link.to"
        class="site-header__link"
        @click="closeMenu"
      >
        <span class="site-header__number" aria-hidden="true">
          {{ String(index + 1).padStart(2, "0") }}
        </span>

        <span>{{ link.label }}</span>
      </NuxtLink>

      <NuxtLink to="/#contact" class="site-header__cta" @click="closeMenu">
        <span class="site-header__dot" aria-hidden="true"></span>
        <span>Discutons</span>
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </nav>
  </header>
</template>
