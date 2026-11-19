<script setup lang="ts">
import { computed } from "vue";
import ProjectDetails from "~/components/projects/ProjectDetails.vue";
import { getProjectBySlug, projects } from "~/data/projects";

const route = useRoute();
const project = computed(() => getProjectBySlug(String(route.params.slug)));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Projet introuvable" });
}

const nextProject = computed(() =>
  projects.find((item) => item.slug === project.value?.nextSlug),
);

useSeoMeta({
  title: () => `${project.value?.name ?? "Projet"} — Amélie Guyot`,
  description: () =>
    project.value?.introduction ?? "Étude de cas de développement web",
  ogTitle: () => `${project.value?.name ?? "Projet"} — Amélie Guyot`,
  ogDescription: () => project.value?.introduction ?? "Étude de cas",
  ogImage: () => project.value?.cover ?? "",
});
</script>

<template>
  <ProjectDetails
    v-if="project"
    :project="project"
    :next-project="nextProject"
  />
</template>
