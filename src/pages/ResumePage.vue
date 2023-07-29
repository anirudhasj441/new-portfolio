<template>
    <q-page class="" :style-fn="style_store.setStyle">
        <q-scroll-area class="q-pr-md full-height flex column" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <!-- <div class="q-mb-md">
            </div> -->
            <iframe v-if="resume != ''" :src="'/api' + resume" class="full-width" :style="style_store.getHeightStyle"
                style="display: block;"></iframe>
        </q-scroll-area>
    </q-page>
</template>

<script>
import { styleFunction } from 'src/stores/global-store';
export default {
    data() {
        return {
            resume: '',
            style_store: styleFunction(),
        }
    },
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
