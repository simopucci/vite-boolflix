<script>
    import { store } from '../store';
    import AppCard from './AppCard.vue';

    export default {
        data() {
            return {
                store,
            };
        },

        components: { AppCard },
    }
</script>

<template>

    <div class="container py-5">
        <h2 class="text-danger fw-bold">FILM:</h2>
        <AppCard v-for="movie in store.movies" :production="movie"></AppCard>
    </div>

    <div class="container py-5">
        <h2 class="text-danger fw-bold">SERIE TV:</h2>
        <AppCard v-for="serie in store.series" :production="serie"></AppCard>
    </div>

</template>


<style lang="scss" scoped>

</style>