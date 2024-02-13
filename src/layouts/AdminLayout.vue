<template>
    <q-layout view="hHh Lpr lFf">
        <q-header flat style="background-color: var(--dark-page);">
            <q-toolbar class="q-py-md">
                <q-avatar>
                    <q-img src="/programmer.webp" style="width: 48px;" :ratio="1" />
                </q-avatar>
                <q-toolbar-title>
                    Admin
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
                            <q-item clickable v-ripple class="" to="/admin" exact>
                                <q-item-section class="col-auto">
                                    <q-icon name="person" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Profile
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple class="" to="/admin/upload_resume" exact>
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/cv.webp" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Resume
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple class="" to="/admin/edit_skills" exact>
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/projects.png" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Skills
                                </q-item-section>
                            </q-item>
                            <q-item clickable v-ripple class="" to="/resume">
                                <q-item-section class="col-auto">
                                    <q-icon name="img:/cv.webp" style="font-size: 1.5rem;"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Projects
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

import { authStore } from 'stores/auth-store';
const auth_store = authStore();
export default {
    data() {
        return {
            // leftDrawerOpen: !this.$q.platform.is.mobile
            // loggedIn: false
            auth_store,
            leftDrawerOpen: !this.$q.platform.is.mobile
        }
    },
    mounted() {
        this.leftDrawerOpen = !this.$q.platform.is.mobile && this.loggedIn;
    },
    computed: {
        loggedIn() {
            return this.auth_store.isLoggedIn;
        }
    },
    watch: {
        loggedIn(value) {
            console.log(value);
            this.leftDrawerOpen = !this.$q.platform.is.mobile && value;
        }
    }
}
</script>


<style scoped lang="scss">
.q-item {
    border-radius: 10px !important;
}
</style>
