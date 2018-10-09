<template>
    <div class="category" href="">
        <nuxt-link :to="'/goods/' + info.url">{{info.name}}</nuxt-link>
        <ul v-if="info.sub">
            <li v-for="el in info.sub" :key="el.id">
                <nuxt-link :to="'/goods/' + el.url">{{el.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Cat',
    props : {
        info : {
            category : Object
        }
    },
}
</script>


<style scoped>
    .category {
        width: 23%;
        display: inline-block;
        vertical-align: top;
        margin: 1%;
        color: #333;
        font-size: 21px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: inherit
    }

    a:hover {
        text-decoration: underline;
    }

    ul {
        padding-left: 0;
    }

    li {
        list-style-type: none;
        font-size: 16px;
    }
</style>

