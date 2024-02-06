<template>
    <q-page class="fixed-top flex flex-center" style="width: 100vw; height: 100svh;">
        <q-dialog v-model="logedInFailed" position="top">
            <q-banner class="bg-red text-white">
                Logged In Failed: {{ msg }}
            </q-banner>
        </q-dialog>
        <q-card flat style="width: 500px; max-width: 100%;">
            <q-card-section>
                <div class="text-h6 text-center text-uppercase">Admin Login</div>
            </q-card-section>
            <q-card-section>
                <q-form @submit="login">
                    <q-input v-model="username" label="Username" color="grey-3"
                        :rules="[val => !!val || 'Field is required']"></q-input>
                    <q-input v-model="password" label="Password" color="grey-3"
                        :rules="[val => !!val || 'Field is required']"></q-input>
                    <div class="text-right">
                        <q-btn label="Submit" type="submit" color="grey-9" />
                        <q-btn label="Reset" type="reset" color="light" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
        <q-inner-loading :showing="loading">
            <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
    </q-page>
</template>

<script>
import {
    authStore
} from 'stores/auth-store'

const auth_store = authStore();
export default {
    data() {
        return {
            logedInFailed: false,
            loading: false,
            username: '',
            password: '',
            auth_store,
            msg: ''
        }
    },
    methods: {
        async login() {
            this.loading = true;
            let res = await this.auth_store.login(this.username, this.password);
            this.loading = false;
            if (res.loggedIn) {
                this.$router.push('/admin');
            }
            else {
                this.logedInFailed = true;
                this.msg = res.msg;
                await new Promise(resolve => {
                    setTimeout(resolve, 2000);
                })
            }

            // this.logedInFailed = false;

        }

    },
    mounted() {

    }
}
</script>
