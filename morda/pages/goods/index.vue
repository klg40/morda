<template>
    <div class="category">
        <HeaderMain :white="true"></HeaderMain>
        <!-- <headerCategory :title="'Категории товаров'"></headerCategory> -->
        <div class="category_list container">
            <Cat v-for="el in categories" :key="el.id" :info="el"></Cat>
        </div>
    </div>
</template>

<script>
import HeaderMain from './../../components/main/HeaderMain.component'
import Cat from './../../components/elements/category.component'
import headerCategory from './../../components/elements/headerCategory.component'

export default {
    name: 'Category',
    components : { HeaderMain, Cat, headerCategory },
    async asyncData({ store }) {
        await store.dispatch('setCategories');
        return {
            categories : store.getters.categories
        }
    },
    head() {
        return {
            title: 'Категории'
        }
    }
}
</script>

<style scoped>
    .category_list {
        margin-top: 60px;
    }
</style>


