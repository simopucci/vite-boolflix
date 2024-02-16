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