<script setup>
import HeaderComponent from "../components/layout/HeaderComponent.vue";
import FooterComponent from "../components/layout/FooterComponent.vue";
</script>

<template>
  <div class="app-layout">
    <HeaderComponent />

    <main id="main-content">
      <slot />
    </main>

    <FooterComponent />
  </div>
</template>
