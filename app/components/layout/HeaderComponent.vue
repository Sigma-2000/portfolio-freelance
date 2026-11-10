<script setup lang="ts">
import { ref } from "vue";
import MorphLogo from "../ui/MorphLogo.vue";

const isMenuOpen = ref(false);

const links = [
  { label: "Réalisations", to: "/#realisations" },
  { label: "Offres", to: "/#offres" },
  { label: "À propos", to: "/#a-propos" },
];

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
<template>
  <header class="site-header">
    <MorphLogo />

    <button
      class="site-header__toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="site-navigation"
      aria-label="Afficher ou masquer le menu"
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
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="site-header__link"
        @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>

      <NuxtLink to="/#contact" class="site-header__cta" @click="closeMenu">
        Discutons
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </nav>
  </header>
</template>
