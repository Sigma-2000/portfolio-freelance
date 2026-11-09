<script setup lang="ts">
import { ref } from "vue";

const isHovered = ref(false);
</script>

<template>
  <NuxtLink
    to="/"
    class="animated-logo"
    aria-label="Amélie Guyot — Accueil"
    @pointerenter="isHovered = true"
    @pointerleave="isHovered = false"
    @focus="isHovered = true"
    @blur="isHovered = false"
  >
    <img
      src="/logos/logo-ag.svg"
      alt=""
      class="logo logo--base"
      :class="{ 'is-hidden': isHovered }"
    />

    <img
      src="/logos/logo-abstrait-ag.svg"
      alt=""
      class="logo logo--abstract"
      :class="{ 'is-visible': isHovered }"
    />
  </NuxtLink>
</template>
