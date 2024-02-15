<script>
    import { store } from '../store';
    import axios from 'axios';

    export default {
        data() {
            return {
                store,
                searchedTitle: '',
            };
        },

        methods: {

            fetchMovies() {
                axios.get(`${store.api.uri}/search/movie`, {
                    params: {
                        api_key: store.api.key,
                        query: this.searchedTitle
                    }
                }).then((res) => {
                    store.movies = res.data.results.map((movie) => {
                        return {
                            title: movie.title,
                            original_title: movie.original_title,
                            original_language: movie.original_language,
                            vote: movie.vote_average,
                        }
                    })
                });
            },

            fetchSeries() {
                axios.get(`${store.api.uri}/search/tv`, {
                    params: {
                        api_key: store.api.key,
                        query: this.searchedTitle
                    }
                }).then((res) => {
                    store.series = res.data.results.map((serie) => {
                        return {
                            title: serie.name,
                            original_title: serie.original_name,
                            original_language: serie.original_language,
                            vote: serie.vote_average,
                        }
                    })
                });
            },

            startSearch() {
                this.fetchMovies();
                this.fetchSeries();

                return this.searchedTitle = '';
            },

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
        },
    };
</script>

<template>
    <header class="header-box p-3">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="#" class="header-title">
                BOOLFLIX
            </a>
            <div class="d-flex">
                <input type="text" class="form-control search-input me-3" v-model="searchedTitle" @keyup.enter="startSearch()">
                <button class="btn btn-primary" @click="startSearch()">Cerca</button>
            </div>
        </div>
    </header>

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
    .header-box {
        background-color: rgb(33, 33, 33);

        .header-title {
            font-size: 2rem;
            color: red;
        }

        .search-input {
            max-width: 300px;
        }
    }
</style>