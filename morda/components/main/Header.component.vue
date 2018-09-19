<template>
    <div class="header">
        <div class="logo">
            <img src="./../../assets/images/logo.jpg"/>
        </div>
        <nuxt-link to="/catalog" class="button">
            <span>
            </span>
            Каталог
        </nuxt-link>
        <nuxt-link to="/catalog" class="button">
            <span>
            </span>
            Услуги
        </nuxt-link>
        <div class="search_block">
            <Search></Search>
        </div>
        <Cart></Cart>
    </div>
</template>

<script>
import Cart from './../elements/cart.component'
import Search from './../elements/search.component'

export default {
    name: 'Header',
    components : { Cart, Search }
}
</script>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
        height: 50px;
        overflow: hidden;
        background-color: #37434c;
        color: white;
    }

    .logo {
        height: 50px;
        width: 50px;
        float: left;
    }

    .logo img {
        width: 100%;
    }

    .button {
        position: relative;
        width: 240px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
        border-right: 1px solid #6d6d6d;
        cursor: pointer;
        transition: .42s;
    }

    span {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    span img {
        width: 20px;
        height: 20px;
        transform: translateY(3px);
    }

    a {
        color: white;
        text-decoration: none
    }

    .search_block {
        width: 50%;
        max-width: 550px;
        float: left;
        margin-top: 9px;
        margin-left: 15px;
    }

</style>


