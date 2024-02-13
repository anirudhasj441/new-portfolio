<template>
    <q-page class="" :style-fn="style_store.setStyle">
        <q-scroll-area class="q-pr-md full-height flex column" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <!-- <div class="q-mb-md">
            </div> -->
            <iframe v-if="resume != ''" :src="resume" class="full-width" :style="style_store.getHeightStyle"
                style=""></iframe>
        </q-scroll-area>
    </q-page>
</template>

<script>
import { styleFunction, backendStore } from 'src/stores/global-store';
import { createMetaMixin } from 'quasar';

const backend = backendStore();

export default {
    data() {
        return {
            resume: '',
            style_store: styleFunction(),
            backend
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
            let url = this.backend.getUrl + "/profile/Anirudha Jadhav";
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onload = () => {
                let response = JSON.parse(xhr.response);
                console.log(response);
                // this.resume = response.data.resume;
            }
            xhr.send();
        },
        async getResume() {
            let url = this.backend.getUrl + '/upload/resume/get_url/Anirudha Jadhav';

            let res = await fetch(url);
            let response = await res.json();
            console.log('resume response::: ', response.url)

            // if (res.status != 200) return '';
            return response.url;
        }
    },
    async mounted() {
        this.getProfile();
        this.resume = await this.getResume();
    }
}
</script>
