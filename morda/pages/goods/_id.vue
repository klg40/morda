<template>
    <div>
        {{goods}}
        <div v-if="goods">
        <Good v-for="good in goods.product" :key="good.id" v-bind:info="good"></Good>
        </div>
    </div>
</template>

<script>
import Good from './../../components/elements/good.component'
import axios from 'axios'

export default {
    components : { Good },
    async asyncData({ store, params }) {
        await store.dispatch('setGoods', params.id);
    },
    computed : {
        goods : function() {
            return this.$store.state.goods
        }
    },
    head() {
        return {
            title: 'Название категории'
        }
    }
}
</script>

