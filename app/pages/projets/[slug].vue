<script setup lang="ts">
import { projects } from "~/data/projects";

const route = useRoute();
const slug = String(route.params.slug);

const project = projects[slug as keyof typeof projects];

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: "Projet introuvable",
  });
}

useSeoMeta({
  title: `${project.title} — Amélie Guyot`,
  description: project.description,
});
</script>

<template>
  <main>
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
  </main>
</template>
