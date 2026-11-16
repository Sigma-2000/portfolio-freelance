<script setup>
import HeroComponent from "../components/home/HeroComponent.vue";
import ProjectsSection from "~/components/home/ProjectsSection.vue";
import OffersSection from "~/components/home/OffersSection.vue";
useSeoMeta({
  title: "Amélie Guyot — Développeuse web freelance",
  description:
    "Création de sites web, e-commerce et expériences digitales sur mesure. Développement web créatif et interfaces singulières.",
});
</script>

<template>
  <main>
    <HeroComponent />
    <ProjectsSection />
    <OffersSection />
  </main>
</template>
