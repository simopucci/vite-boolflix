<script>
    import { store } from '../store';

    export default {
        data() {
            return {
                store,
            };
        },

        methods: {

            getFlag(lang) {
                if (lang == 'it') {
                    return '/img/it.png';
                } else if (lang == 'en') {
                    return '/img/en.png';
                } else if (lang == 'es') {
                    return './img/es.png';
                } else {
                    return '/img/unknown.png';
                }
            },
        }
    }
</script>

<template>

    <div class="container py-5">
        <h2 class="text-danger fw-bold">FILM:</h2>
        <ul v-for="movie in store.movies">
            <li><span class="fw-bold">Titolo: </span>{{ movie.title }}</li>
            <li><span class="fw-bold">Titolo originale: </span>{{ movie.original_title }}</li>
            <li>
                <span class="fw-bold">Lingua originale: </span>
                <img :src="getFlag(movie.original_language)" class="flag">
            </li>
            <li><span class="fw-bold">Voto: </span>{{ movie.vote }}</li>
        </ul>
    </div>

    <div class="container py-5">
        <h2 class="text-danger fw-bold">SERIE TV:</h2>
        <ul v-for="serie in store.series">
            <li><span class="fw-bold">Titolo: </span>{{ serie.title }}</li>
            <li><span class="fw-bold">Titolo originale: </span>{{ serie.original_title }}</li>
            <li>
                <span class="fw-bold">Lingua originale: </span>
                <img :src="getFlag(serie.original_language)" class="flag">
            </li>
            <li><span class="fw-bold">Voto: </span>{{ serie.vote }}</li>
        </ul>
    </div>

</template>


<style lang="scss" scoped>

</style>