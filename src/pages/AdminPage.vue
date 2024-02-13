<template>
    <q-page class="q-pb-md" :style-fn="style_store.setStyle">
        <q-scroll-area class="fit q-pr-md" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <q-card flat class="full-width q-mb-lg">
                <q-card-section>
                    <div class="text-h6 text-center">Edit Profile</div>
                </q-card-section>
                <q-card-section>
                    <q-input v-model="name" label="Name" outlined></q-input>
                </q-card-section>
                <q-card-section>
                    <q-input v-model="bio" label="Bio" outlined type="textarea" />
                </q-card-section>
                <q-card-section class="q-gutter-md">
                    <div class="text-h6">Contacts</div>
                    <q-input v-model="email" label="email" outlined></q-input>
                    <q-input v-model="github" label="GitHub" outlined></q-input>
                    <q-input v-model="linkedin" label="LinkedIn" outlined></q-input>
                    <q-input v-model="whatsapp" label="WhatsApp" outlined></q-input>
                    <q-input v-model="insta" label="Instagram" outlined></q-input>

                </q-card-section>
            </q-card>
            <div class="text-right">
                <q-btn label="update" color="grey-8" @click="updateProfile"></q-btn>
            </div>
        </q-scroll-area>

    </q-page>
</template>

<script>
import { styleFunction, backendStore } from '../stores/global-store';
import { authStore } from 'stores/auth-store';

const auth_store = authStore();
const backend = backendStore();

export default {
    components: {

    },
    data() {
        return {
            auth_store,
            bio: '',
            name: '',
            email: '',
            github: '',
            linkedin: '',
            whatsapp: '',
            insta: '',
            skills: [],
            projects: [],
            style_store: styleFunction(),
            backend
        }
    },
    methods: {
        async getProfile() {
            let url = this.backend.getUrl + '/profile/Anirudha Jadhav';
            let res = await fetch(url);
            let response = await res.json();
            let profile = response.data;
            this.name = profile.name;
            this.bio = profile.bio;
            let contact = profile.contact[0];
            this.email = contact.email;
            this.linkedin = contact.linkedin;
            this.github = contact.github;
            this.whatsapp = contact.whatsapp_no;
            this.insta = contact.insta;

            console.log(response.data)
        },
        updateProfile() {
            let url = this.backend.getUrl + '/profile/Anirudha Jadhav';
            let data = {
                bio: this.bio,
                contact: [
                    {
                        email: this.email,
                        github: this.github,
                        linkedin: this.linkedin,
                        whatsapp_no: this.whatsapp,
                        insta: this.insta
                    }
                ]
            }

            const xhr = new XMLHttpRequest();
            xhr.open('PATCH', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);
            xhr.onload = () => {
                let response = JSON.parse(xhr.response);
                console.log(response);
            }
            xhr.send(JSON.stringify(data))
        }
    },
    mounted() {
        this.getProfile();
    },
    computed: {
        token() {
            return this.auth_store.getToken
        }
    }
}
</script>
