<template>
    <q-layout view="hHh lpr lFf">
        <q-header flat style="background-color: var(--dark-page);">
            <q-toolbar class="q-py-md">
                <q-avatar>
                    <q-img src="/programmer.webp" style="width: 48px;" :ratio="1" />
                </q-avatar>
                <q-toolbar-title>
                    CodingDevil
                </q-toolbar-title>
                <q-btn v-if="$q.platform.is.mobile" flat dense round icon="menu" aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen" />

                <!-- <div>Quasar v{{ $q.version }}</div> -->
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" class="q-px-md q-pb-md" :class="$q.platform.is.mobile ? 'q-py-md' : ''"
            style="background-color: transparent !important;">
            <q-card style="height: 100%" flat class="">
                <q-card-section style="height: 100%" class="">
                    <q-scroll-area class="fit">
                        <q-list class="">
                            <q-item clickable v-ripple class="" to="/" exact>
                                <q-item-section class="col-auto">
                                    <q-icon name="home" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Home
                                </q-item-section>
                            </q-item>
                            <!-- <q-item clickable v-ripple class="" to="/projects" exact>
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/projects.png" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Projects
                                </q-item-section>
                            </q-item> -->
                            <q-item clickable v-ripple class="" to="/resume">
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
                            <q-item clickable v-ripple class="" tag="a" href="https://www.instagram.com/anirudha2606/"
                                target="_blank">
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/insta.svg" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Instagram
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple class="" tag="a" href="https://github.com/anirudhasj441"
                                target="_blank">
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/github.svg" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    github
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple class="" tag="a"
                                href="https://www.youtube.com/channel/UCXYwCHwkharDOJkBzYz-jwg" target="_blank">
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/youtube.svg" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    YouTube
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple class="" tag="a"
                                href="https://www.linkedin.com/in/anirudha-jadhav-183572154/" target="_blank">
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
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    data() {
        return {
            leftDrawerOpen: !this.$q.platform.is.mobile
        }
    },
}
</script>

<style scoped lang="scss">
.q-item {
    border-radius: 10px !important;
}
</style>
