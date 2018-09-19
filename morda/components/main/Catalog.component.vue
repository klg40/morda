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
    data : function(){
        return {
            data : [
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик Красный с синими пуговицами',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик Красный с синими пуговицами',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                }
            ]
        }
    }
}
</script>

<style scoped>
    .catalog {
        margin-top: 1%;
    }
</style>


