<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// SVG importés en texte pour accéder aux <path>.
import baseSvg from "~/assets/logos/logo-morphing-base.svg?raw";
import abstractSvg from "~/assets/logos/logo-morphing-abstrait.svg?raw";

// Références aux éléments HTML qui contiennent les SVG.
const baseRef = ref<HTMLSpanElement | null>(null);
const targetRef = ref<HTMLSpanElement | null>(null);

// Identifiants communs aux deux versions.
const letters = ["a", "m", "e-accent", "l", "i", "e", "g", "u", "y", "o", "t"];

const DISTANCE = 180; // Rayon d'influence en pixels.

let timeline: GSAPTimeline | null = null;
let gsapInstance: typeof import("gsap").gsap | null = null;
let progressTween: { kill: () => void } | null = null;
let isFocused = false;
let destroyed = false;

// Déplace doucement la tête de lecture de GSAP.
function setProgress(value: number) {
  if (!timeline || !gsapInstance) return;

  progressTween?.kill();

  progressTween = gsapInstance.to(timeline, {
    progress: value, // 0 = classique, 1 = abstrait
    duration: 0.35,
    ease: "power2.out",
    overwrite: true,
  });
}

// Calcule la distance entre le curseur et le logo.
function onPointerMove(event: PointerEvent) {
  if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;

  if (!baseRef.value || isFocused) return;

  const rect = baseRef.value.getBoundingClientRect();

  // Distance horizontale et verticale au rectangle.
  const dx = Math.max(rect.left - event.clientX, 0, event.clientX - rect.right);

  const dy = Math.max(rect.top - event.clientY, 0, event.clientY - rect.bottom);

  const distance = Math.hypot(dx, dy);

  // Convertit la distance en progression entre 0 et 1.
  const progress = Math.max(0, 1 - distance / DISTANCE);

  setProgress(progress);
}

// Au clavier, on affiche entièrement l'état abstrait.
function onFocus() {
  isFocused = true;
  setProgress(1);
}

function onBlur() {
  isFocused = false;
  setProgress(0);
}

onMounted(async () => {
  // Ne pas animer si le visiteur préfère moins de mouvement.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Chargement de GSAP uniquement dans le navigateur.
  const { gsap } = await import("gsap");
  const { MorphSVGPlugin } = await import("gsap/MorphSVGPlugin");

  if (destroyed) return;

  gsapInstance = gsap;
  gsap.registerPlugin(MorphSVGPlugin);

  // Récupère les SVG insérés par v-html.
  const baseRoot = baseRef.value?.querySelector("svg");
  const targetRoot = targetRef.value?.querySelector("svg");

  if (!baseRoot || !targetRoot) return;

  // Timeline préparée, mais immobile au départ.
  timeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1.1, //0.8
      ease: "power2.inOut",
    },
  });

  letters.forEach((letter, index) => {
    // Trouve la même lettre dans les deux SVG.
    const source = baseRoot.querySelector<SVGPathElement>(
      `path[data-letter="${letter}"]`,
    );

    const target = targetRoot.querySelector<SVGPathElement>(
      `path[data-letter="${letter}"]`,
    );

    if (!source || !target) {
      console.warn(`Lettre manquante : ${letter}`);
      return;
    }

    // Matrices : position réelle de chaque lettre.
    const sourceMatrix = source.getScreenCTM();
    const targetMatrix = target.getScreenCTM();

    if (!sourceMatrix || !targetMatrix) return;

    // Conversion du repère abstrait vers le repère classique.
    const matrix = sourceMatrix.inverse().multiply(targetMatrix);

    // Convertit le chemin SVG en coordonnées modifiables.
    const rawPath = MorphSVGPlugin.stringToRawPath(
      target.getAttribute("d") || "",
    );

    // Applique la matrice à chaque paire (x, y).
    for (const segment of rawPath) {
      for (let i = 0; i < segment.length; i += 2) {
        const x = segment[i]!;
        const y = segment[i + 1]!;

        segment[i] = matrix.a * x + matrix.c * y + matrix.e;

        segment[i + 1] = matrix.b * x + matrix.d * y + matrix.f;
      }
    }

    // Reconstruit un chemin SVG utilisable par GSAP.
    const alignedPath = MorphSVGPlugin.rawPathToString(rawPath);

    // Anime chaque lettre avec un léger décalage.
    timeline?.to(
      source,
      {
        morphSVG: {
          shape: alignedPath,
          type: "rotational",
        },
      },
      index * 0.06,
    );
  });

  // Écoute le mouvement du curseur dans toute la fenêtre.
  window.addEventListener("pointermove", onPointerMove);
});

onUnmounted(() => {
  destroyed = true;

  // Nettoyage des événements et animations.
  window.removeEventListener("pointermove", onPointerMove);
  progressTween?.kill();
  timeline?.kill();
});
</script>

<template>
  <NuxtLink
    to="/"
    class="morph-logo"
    aria-label="Amélie Guyot — Accueil"
    @focus="onFocus"
    @blur="onBlur"
  >
    <!-- SVG classique : celui qui se transforme. -->
    <span
      ref="baseRef"
      class="morph-logo__base"
      aria-hidden="true"
      v-html="baseSvg"
    />

    <!-- SVG abstrait : sert de modèle à GSAP. -->
    <span
      ref="targetRef"
      class="morph-logo__target"
      aria-hidden="true"
      v-html="abstractSvg"
    />
  </NuxtLink>
</template>
