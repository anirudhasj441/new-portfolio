import { defineStore } from "pinia";

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
            return new Promise(resolve => {
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
                    if (xhr.status == 200) {
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
