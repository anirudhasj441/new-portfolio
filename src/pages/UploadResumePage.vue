<template>
    <q-page class="q-pb-md" :style-fn="style_store.setStyle">
        <q-scroll-area class="fit resume-scroll-area q-pr-md" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <div class="fit flex flex-center">
                <q-card flat style="width: 500px; max-width: 100%;">
                    <q-card-section>
                        <div class="text-h6 text-center">Resume</div>
                    </q-card-section>
                    <q-card-section>
                        <q-uploader :factory="resumeUpload" method="PUT" send-raw flat bordered :multiple="false"
                            accept=".pdf" color="grey-8" class="full-width"></q-uploader>
                    </q-card-section>
                </q-card>
            </div>
        </q-scroll-area>
    </q-page>
</template>

<script>
import { styleFunction, backendStore } from '../stores/global-store';
import { authStore } from 'stores/auth-store';

const style_store = styleFunction();
const auth_store = authStore();
const backend = backendStore();

export default {
    data() {
        return {
            style_store,
            auth_store,
            backend
        }
    },
    methods: {
        async resumeUpload() {
            let url = backend.getUrl + '/upload/resume/Anirudha Jadhav';

            let res = await fetch(url);

            let response = await res.json();
            if (res.status !== 200) return '';
            console.log(res.status);
            console.log(response);
            let uploadUrl = response.url

            return { url: uploadUrl };
        }
    }
}
</script>

<style lang="scss">
.resume-scroll-area {
    .q-scrollarea__content {
        width: 100% !important;
        height: 100% !important;
    }
}
</style>
