<template>
    <div class="catalog_page">
        <Header></Header>
        <div class="empty_block"></div>
        <Block :category="block1"></Block>
        <Catalog></Catalog>
    </div>
</template>

<script>
import Catalog from './../../components/main/Catalog.component'
import Header from './../../components/main/Header.component'
import Block from './../../components/elements/block.component'

export default {
    name: 'CatalogPage',
    components : { Catalog, Header, Block },
    data : function(){
        return {
            block1 : {
                title : 'Товары для дома',
                color : '#fff343',
                links : [{ title : 'Вазы', href : '' },{ title : 'Люстры', href : '' },{ title : 'Картины', href : '' },],
                fontColor : 'black'
            }
        }
    }
}
</script>

<style scoped>
    .empty_block {
        height: 45px;
        display: table;
        width: 100%;
    }
</style>


