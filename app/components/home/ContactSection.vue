<script setup lang="ts">
const email = "amelieguyot7@gmail.com";
const calendarUrl = "https://cal.com/amelie-guyot-t2sbve/appel-decouverte";
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-section__inner">
      <div class="contact-section__eyebrow-row">
        <p class="contact-section__eyebrow">Un projet en tête ?</p>

        <p class="contact-section__availability">
          Disponible pour échanger
          <span
            class="contact-section__availability-dot"
            aria-hidden="true"
          ></span>
        </p>
      </div>

      <h2 class="contact-section__title">
        Donnons forme à votre <em>projet.</em>
      </h2>

      <div class="contact-section__actions">
        <a
          class="contact-section__button"
          :href="calendarUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Réserver un créneau
          <span aria-hidden="true">↗</span>
        </a>

        <div class="contact-section__email-group">
          <span class="contact-section__email-label">
            Vous préférez m'écrire ?
          </span>

          <a
            class="contact-section__email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amelieguyot7%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            amelieguyot7@gmail.com
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
