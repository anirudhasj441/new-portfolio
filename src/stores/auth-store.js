import { defineStore } from "pinia";

export const authStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false
    }),
    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn
    },
    actions: {
        async login(username, password) {
            let url = '/api/auth/login';
            let data = {
                username: username,
                password: password
            }
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                let response = JSON.parse(xhr.response);
                console.log(response);
                if (xhr.status == 200) {
                    sessionStorage.setItem('token', response.token)
                    this.isLoggedIn = true;
                    return true;
                }
                return false;
            }
            xhr.send(JSON.stringify(data))
        }
    }
})
