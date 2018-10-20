<template>
    <div>
        {{pr}}
        {{goods}}
        <div v-if="goods">
        <Good v-for="good in goods.product" :key="good.id" v-bind:info="good"></Good>
        </div>
    </div>
</template>

<script>
import Good from './../../components/elements/good.component'
import axios from 'axios'
import FormData from 'form-data'

export default {
    components : { Good },
    async asyncData({ store, params }) {
        var body = new FormData();
        body.append('url', params.id.toString());
        console.log(body);
        await store.dispatch('setGoods', body);
        return {
            goods : store.getters.goods,
            pr : params
        }
    },
    head() {
        return {
            title: 'Название категории'
        }
    }
}
</script>

