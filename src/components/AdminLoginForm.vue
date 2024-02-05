<template>
    <div class="fit flex flex-center z-top">
        <q-card flat style="width: 500px; max-width: 100%;">
            <q-card-section>
                <div class="text-h6 text-center text-uppercase">Admin Login</div>
            </q-card-section>
            <q-card-section>
                <q-form @submit="auth_store.login(username, password)" class="q-gutter-md">
                    <q-input v-model="username" label="Username" color="grey-3"></q-input>
                    <q-input v-model="password" label="Password" color="grey-3"></q-input>
                    <div class="text-right">
                        <q-btn label="Submit" type="submit" color="grey-9" />
                        <q-btn label="Reset" type="reset" color="light" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import {
    authStore
} from 'stores/auth-store'

const auth_store = authStore();
export default {
    data() {
        return {
            username: '',
            password: '',
            auth_store
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>
