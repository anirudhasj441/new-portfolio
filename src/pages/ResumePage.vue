<template>
    <q-page class="" :style-fn="style_store.setStyle">
        <q-scroll-area class="q-pr-md full-height flex column" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <!-- <div class="q-mb-md">
            </div> -->
            <iframe v-if="resume != ''" :src="'/api' + resume" class="full-width" :style="style_store.getHeightStyle"
                style=""></iframe>
        </q-scroll-area>
    </q-page>
</template>

<script>
import { styleFunction } from 'src/stores/global-store';
import { createMetaMixin } from 'quasar';
export default {
    data() {
        return {
            resume: '',
            style_store: styleFunction(),
        }
    },
    mixins: [
        createMetaMixin({
            title: "Anirudha Jadhav: Resume",
            meta: {
                description: {
                    name: "discription",
                    content: "Anirudha Jadhav Resume"
                },
                keywords: {
                    name: "keywords",
                    content: `
                        Anirudha Jadhav resume,
                        Web developer resume,
                        full stack developer resume,
                        coder resume, programmer resume,
                        resume sample, resume example,
                        Web developer resume example,
                        full stack developer resume example,
                        coder resume example,
                        programmer resume example,
                        Web developer resume sample,
                        full stack developer resume sample,
                        coder resume sample,
                        programmer resume sample
                    `
                }
            }
        })
    ],
    methods: {
        getProfile: function () {
            let url = "/api/get_profile/";
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onload = () => {
                let response = JSON.parse(xhr.response);
                console.log(response);
                this.resume = response.data.resume;
            }
            xhr.send();
        },
    },
    mounted() {
        this.getProfile();
    }
}
</script>
