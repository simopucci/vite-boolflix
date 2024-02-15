import { reactive } from 'vue';

export const store = reactive({
    api: {
        uri: 'https://api.themoviedb.org/3',
        key: '8f984c00f1734d0b53e650112a493212',
    },

    movies: [],
    series: [],
});