<template>
  <q-card style="height: 100%; border-radius: 10px;" flat class="">
    <q-card-section style="height: 100%">
      <q-scroll-area class="fit">
        <q-list class="">
          <q-item clickable v-ripple class="q-col-gutter-x-sm" to="/">
            <q-item-section class="col-auto">
              <q-icon name="home" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-col-gutter-x-sm">
            <q-item-section class="col-auto">
              <q-icon name="img:/projects.png" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              Projects
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-col-gutter-x-sm">
            <q-item-section class="col-auto">
              <q-icon name="img:/cv.webp" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              Resume
            </q-item-section>
          </q-item>
          <q-item-label header class="text-h6">
            Social
          </q-item-label>
          <q-item clickable v-ripple class="q-col-gutter-x-sm">
            <q-item-section class="col-auto">
              <q-icon name="img:/insta.svg" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              Instagram
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-col-gutter-x-sm">
            <q-item-section class="col-auto">
              <q-icon name="img:/github.svg" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              github
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-col-gutter-x-sm">
            <q-item-section class="col-auto">
              <q-icon name="img:/youtube.svg" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              YouTube
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="q-col-gutter-x-sm">
            <q-item-section class="col-auto">
              <q-icon name="img:linkedin.svg" style="font-size: 1.5rem;"></q-icon>
            </q-item-section>
            <q-item-section>
              Linkedin
            </q-item-section>
          </q-item>

          <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
        </q-list>
      </q-scroll-area>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.q-item {
  border-radius: 10px !important;
}
</style>
