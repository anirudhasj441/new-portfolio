import { defineStore } from "pinia";
import { backendStore } from "./global-store";

export const authStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        token: null
    }),
    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn,
        getToken: (state) => state.token
    },
    actions: {
        login(username, password) {
            const backend = backendStore();
            return new Promise(resolve => {
                let url = backend.getUrl + '/auth/login';
                let data = {
                    username: username,
                    password: password
                }
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = () => {
                    let response = JSON.parse(xhr.response);
                    if (response.token) {
                        sessionStorage.setItem('token', response.token)
                        this.token = response.token;
                        this.isLoggedIn = true;
                    }
                    response.loggedIn = this.isLoggedIn;
                    console.log(response);
                    resolve(response);
                }
                xhr.send(JSON.stringify(data))
            })
        }
    }
})
