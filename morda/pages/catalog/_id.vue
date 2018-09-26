<template>
    <div>
        {{post}}
        <!-- <Good v-for="good in post" :key="good.id" v-bind:info="good"></Good> -->
    </div>
</template>

<script>
import Good from './../../components/elements/good.component'
import axios from 'axios'
import FormData from 'form-data'

export default {
    components : { Good },
    async asyncData({ store, params }) {
        await store.dispatch('getPost', params.id);
        return {
            post : store.getters.post
        }
    },
    head() {
        return {
            title: this.post
        }
    }
}
</script>

