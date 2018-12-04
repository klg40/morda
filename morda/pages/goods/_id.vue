<template>
    <div class="category">
        <HeaderMain :white="true"></HeaderMain>
        <div class="breadcrumb"></div>
        <div v-if="goods" class="goods container">
            <Good v-for="good in goods.product" :key="good.id" v-bind:info="good"></Good>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
import Good from './../../components/elements/good.component'
import HeaderMain from './../../components/main/HeaderMain.component'
import axios from 'axios'

export default {
    components : { Good, HeaderMain },
    async asyncData({ store, params }) {
        await store.dispatch('setCategories');
        await store.dispatch('setGoods', params.id);
    },
    computed : {
        goods : function() {
            return this.$store.state.goods
        },
        info : function() {
            this.$store.getters.getCategory;
            var result;
            var catgrs = {...this.$store.state.categories};
            for (let item in catgrs ) {
                if (catgrs[item].url == this.$route.params.id) { result = catgrs[item] }
            };
            return result;
        }
    },
    head() {
        return {
            title: 'Название категории'
        }
    }
}
</script>

<style scoped>
    .goods {
        width: 100%;
        margin-top: 60px;
    }
</style>


