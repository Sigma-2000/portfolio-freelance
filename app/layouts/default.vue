<script setup>
import HeaderComponent from "../components/layout/HeaderComponent.vue";
import FooterComponent from "../components/layout/FooterComponent.vue";
</script>
<template>
  <div>
    <HeaderComponent />

    <main>
      <slot></slot>
    </main>

    <FooterComponent />
  </div>
</template>
