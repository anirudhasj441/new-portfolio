<template>
    <q-card style="width: 500px; max-width: 100%;">
        <q-card-section class="row item-center">
            <div class="text-h6">Upload Icon</div>
            <q-space></q-space>
            <q-btn flat icon="close" @click="$emit('closeDialog')"></q-btn>
        </q-card-section>
        <q-card-section>
            <q-uploader flat bordered color="grey-8" method="PUT" send-raw
                :headers="[{ name: 'Content-Type', value: 'image/svg+xml' }]" :multiple="false" accept="image/*"
                :factory="upload" class="full-width" @uploaded="onUploaded"></q-uploader>
        </q-card-section>
    </q-card>
</template>

<script>
import { backendStore } from '../stores/global-store';
import { authStore } from 'src/stores/auth-store';

const backend = backendStore();
const auth_store = authStore();

export default {
    props: {
        skillObj: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            backend,
            auth_store,
            skill_icon: ''
        }
    },
    methods: {
        async upload(files) {
            let response = await new Promise(resolve => {
                let url = this.backend.getUrl + '/upload/skill_icon/Anirudha Jadhav/' + this.skillObj._id;
                let file = files[0]
                let data = {
                    filename: file.name
                }
                // let res = await fetch(url, {
                //     method: 'POST',
                //     body: JSON.stringify(data),
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // })
                // let response = await res.json();
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/json');

                xhr.onload = () => {
                    let response = JSON.parse(xhr.response);
                    console.log("SKILL ICON RESPONSE::: ", response);
                    resolve(response)
                }
                xhr.send(JSON.stringify(data))
            })
            this.skill_icon = response.skill_icon;
            return {
                url: response.url
            }
        },
        async onUploaded() {
            let response = await new Promise(resolve => {

                let url = this.backend.getUrl + '/profile/Anirudha Jadhav/skill/' + this.skillObj._id;
                console.log(url)
                let data = {
                    icon: '/' + this.skill_icon
                }

                const xhr = new XMLHttpRequest();

                xhr.open('PATCH', url);

                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + this.auth_store.getToken);

                xhr.onload = () => {
                    let response = JSON.parse(xhr.response);

                    resolve(response);
                }

                xhr.send(JSON.stringify(data))

            })

            this.$emit('uploaded', response);
        }
    }
}
</script>
