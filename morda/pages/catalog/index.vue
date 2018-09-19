<template>
    <div class="catalog_page">
        <Header></Header>
        <div class="empty_block"></div>
        <Catalog></Catalog>
    </div>
</template>

<script>
import Catalog from './../../components/main/Catalog.component'
import Header from './../../components/main/Header.component'

export default {
    name: 'CatalogPage',
    components : { Catalog,Header }
}
</script>

<style scoped>
    .empty_block {
        height: 45px;
        display: table;
        width: 100%;
    }
</style>


