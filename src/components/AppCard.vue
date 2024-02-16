<script>
    export default {
        props: {
            production: Object,
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
        },
    };
</script>

<template>
    <ul>
        <li><span class="fw-bold">Titolo: </span>{{ production.title }}</li>
        <li><span class="fw-bold">Titolo originale: </span>{{ production.original_title }}</li>
        <li>
            <span class="fw-bold">Lingua originale: </span>
            <img :src="getFlag(production.original_language)" class="flag">
        </li>
        <li>
            <span class="fw-bold">Voto: </span>{{ production.vote }}
            <br>
            <i v-for="star in 5" :class="star < production.vote_average ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>

        </li>
        <li><img :src="`https://image.tmdb.org/t/p/w342${production.poster_path}`" alt=""></li>
    </ul>
</template>


<style lang="scss" scoped>

</style>