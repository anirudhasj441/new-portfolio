<template>
    <q-page class="q-pb-md" :style-fn="style_store.setStyle">
        <!-- <div class="text-h1">Hello</div> -->
        <admin-login-form v-if="!loggedIn"></admin-login-form>
    </q-page>
</template>

<script>
import { styleFunction } from '../stores/global-store';
import { authStore } from 'stores/auth-store';
import AdminLoginForm from 'src/components/AdminLoginForm.vue';

const auth_store = authStore();
export default {
    components: {
        AdminLoginForm
    },
    data() {
        return {
            auth_store,
            style_store: styleFunction()
        }
    },
    computed: {
        loggedIn() {
            return this.auth_store.isLoggedIn;
        }
    }
}
</script>
