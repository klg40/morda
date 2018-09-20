<template>
    <div class="catalog container">
        <Good v-for="item in data" :key="item.title" :info="item"></Good>
    </div>
</template>

<script>
import Good from './../elements/good.component'

export default {
    name: 'Catalog',
    components : { Good },
    props : {
        data : Array
    }
}
</script>

<style scoped>
    .catalog {
        margin-top: 1%;
        display: table;
        width: 100%;
    }

    .catalog:after {
        content: '';
        clear: both;
    }
</style>


