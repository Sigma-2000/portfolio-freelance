<script setup lang="ts">
import OfferDetails from "~/components/offers/OfferDetails.vue";
import { getOfferFamily } from "~/data/offers";

const route = useRoute();
const family = computed(() => getOfferFamily(String(route.params.slug)));

if (!family.value) {
  throw createError({ statusCode: 404, statusMessage: "Offre introuvable" });
}

useSeoMeta({
  title: () =>
    family.value
      ? `${family.value.category} — Offres | Amélie Guyot`
      : "Offres | Amélie Guyot",
  description: () =>
    family.value?.description ??
    "Découvrez mes offres de création et développement web.",
});
</script>

<template>
  <OfferDetails v-if="family" :family="family" />
</template>
