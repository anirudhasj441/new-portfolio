import { defineStore } from 'pinia';

export const styleFunction = defineStore('styleFunction', {
    state: () => ({
        height_style: '',
        el_height: ''
    }),
    getters: {
        getHeightStyle: (state) => state.el_height,
        // getElHeightStyle: (state) => state.el_height,
    },
    actions: {
        setStyle(offset) {
            //   this.counter++;
            this.height_style = {
                height: offset ? `calc(100vh - ${offset}px)` : '100vh'
            }
            this.el_height = {
                height: offset ? `calc(100vh - ${offset}px - 1rem)` : '100vh'
            }
            // this.height_style = height_style;
            return this.height_style;
        },
    },
});

export const backendStore = defineStore('backend', {
    state: () => ({
        url: 'https://fwn6je8hab.execute-api.ap-south-1.amazonaws.com'
    }),
    getters: {
        getUrl: (state) => state.url
    }
})
