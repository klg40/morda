<template>
    <div>
        {{goods}}
        <!-- <Good v-for="good in goods" :key="good.id" v-bind:info="good"></Good> -->
    </div>
</template>

<script>
import Good from './../../components/elements/good.component'
import axios from 'axios'
import FormData from 'form-data'

export default {
    components : { Good },
    async asyncData({ store, params }) {
        await store.dispatch('setGoods', params.id);
    },
    computed : {
        goods : function() {
            return this.$store.getters.goods
        },
    },
    head() {
        return {
            title: this.goods
        }
    }
}
</script>

