<template>
    <div class="top_panel">
        <div class="container">
            <div class="logo">
            </div>
            <div class="button border button_catalog">
                <nuxt-link to="/catalog">
                    <span>
                    </span>
                    Каталог
                </nuxt-link>
            </div>
            <div class="button button_service">
                <nuxt-link to="/catalog">
                    <span>
                    </span>
                    Услуги
                </nuxt-link>
            </div>
            <Cart :main="true"></Cart>
        </div>
    </div>
</template>

<script>
import Regions from './../elements/regions.component'
import Cart from './../elements/cart.component'
import MainMenu from './../elements/main-menu.component'

export default {
    name: 'HeaderMain',
    components: { Regions, Cart, MainMenu }
}
</script>

<style scoped>
    .top_panel {
        overflow: hidden;
        color: white;
        font-weight: 600;
        height: 80px;
    }

    .logo {
        width: 80px;
        height: 80px;
        float: left;
    }

    .logo img {
        height: 100%;
    }

    .button {
        position: relative;
        width: 240px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        float: left;
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

    a,
    a:hover,
    a:active,
    a:visited {
        color: white;
        text-decoration: none;
    }
</style>




