<template>
    <q-card style="width: 500px; max-width: 100%;">
        <q-card-section class="row items-center">
            <div class="text-h6">Add Skill</div>
            <q-space></q-space>
            <q-btn flat icon="close" @click="$emit('closeDialog')"></q-btn>
        </q-card-section>
        <q-card-section class="q-gutter-md">
            <q-input v-model="skill" label="skill" outlined></q-input>
            <q-input v-model="category" label="category" outlined></q-input>
            <div class="text-right">
            </div>
        </q-card-section>
        <q-card-section class="q-pb-md q-pt-sm">
            <q-btn icon="add" color="grey-9" class="full-width" @click="addSkill" />
        </q-card-section>
    </q-card>
</template>

<script>
import { backendStore } from '../stores/global-store';
import { authStore } from 'src/stores/auth-store';

const backend = backendStore();
const auth_store = authStore();
export default {
    data() {
        return {
            skill: '',
            category: '',
            icon: '',
            backend,
            auth_store
        }
    },
    methods: {
        async addSkill() {
            let response = await new Promise(resolve => {
                let url = this.backend.getUrl + '/profile/Anirudha Jadhav/skill';
                let data = {
                    skill: this.skill,
                    category: this.category
                }
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);

                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + this.auth_store.getToken);

                xhr.onload = () => {
                    let response = JSON.parse(xhr.response);
                    // console.log(response);
                    resolve(response)
                }

                xhr.send(JSON.stringify(data))
            })
            this.$emit('added', response)
        }
    }
}
</script>
