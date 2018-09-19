<template>
    <div class="left_bar">
        <div class="menu">
            <div v-for="item in data" :key="item.id">
                <nuxt-link to="'catalog/' + item.url">{{item.name}}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LeftBar',
    data : function() {
        return {
         data : []
        }
    },
    created : function() {
        const data = axios.get('http://api.posrednik-rf.com/api/v1/category.list').then( data => {
            this.data = data.data
        });
    }
}
</script>

<style scoped>
    .left_bar {
        position: fixed;
        left: 0;
        top: 0;
        width: 320px;
        height: 100%;
        background-color: orange
    }

    .menu > div {
        display: table;
        color: white;
    }
</style>


