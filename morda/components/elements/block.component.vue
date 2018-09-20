<template>
    <div class="category_block" v-bind:style="{ 
                backgroundColor: category.color, 
                color : category.fontColor,
                'box-shadow' : '0 3px 20px ' + category.color  }">
        <h2>{{category.title}}</h2>
        <div class="links">
            <a :href="link.href" 
               v-for="(link, index) in category.links" 
               v-bind:style="{ color : category.fontColor }"
               :key="index">{{link.title}}</a>
        </div>
        <a href="" class="button">
            
        </a>
        <div class="image" v-bind:style="{ backgroundImage : 'url(' + category.image + ')' }"></div>
    </div>
</template>

<script>
export default {
    name : 'Block',
    props : {
        category : Object
    }
}
</script>

<style scoped>
    .category_block {
        width: 48%;
        margin: 1%;
        display: inline-block;
        float: left;
        border-radius: 12px;
        padding: 30px 45px;
        height: 370px;
        position: relative;
    }

    .image {
        position: absolute;
        top: 30px;
        right: 45px;
        width: calc(40% - 45px);
        height: calc(100% - 60px);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    h2 {
        width: 50%;
        font-size: 48px;
        line-height: 48px;
        font-weight: bold;
    }

    .links {
        width: 60%;
        margin-top: 30px;
    }

    .links a {
        font-size: 21px;
        margin-right: 15px;
        display: inline-block;
    }
</style>


