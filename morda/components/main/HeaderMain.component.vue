<template>
    <div class="top_panel" :class="{ 'white' : white }">
        <div class="container">
            <div class="logo">
            </div>
            <div class="button border button_catalog">
                <nuxt-link to="/goods">
                    <span>
                    </span>
                    Каталог
                </nuxt-link>
                <catalogMenu/>
            </div>
            <div class="button button_service">
                <nuxt-link to="/services">
                    <span>
                    </span>
                    Услуги
                </nuxt-link>
            </div>
            <div class="button button_buyer">
                <nuxt-link to="/services">
                    <span>
                    </span>
                    Покупателям
                </nuxt-link>
            </div>
            <div class="button button_seller">
                <nuxt-link to="/services">
                    <span>
                    </span>
                    Партнерам
                </nuxt-link>
            </div>
            <Cart :main="true"></Cart>
            <WishList :main="true"></WishList>
        </div>
    </div>
</template>

<script>
import Regions from './../elements/regions.component'
import Cart from './../elements/cart.component'
import MainMenu from './../elements/main-menu.component'
import WishList from './../elements/wish.component'
import catalogMenu from './../elements/catalogMenu.component'

export default {
    name: 'HeaderMain',
    components: { Regions, Cart, MainMenu, WishList, catalogMenu },
    props : {
        white : {
            type: Boolean,
            default: false
        }
    },
    mounted : function() {
        var slider = document.getElementById('slider');
        if (slider) {
            window.addEventListener('scroll', function(event) {
                if ( window.pageYOffset > slider.clientHeight - 60 ) {
                    this.white = true
                } else {
                    this.white = false
                }
            }.bind(this))
        }
    }
}
</script>

<style scoped>
    .top_panel {
        position: fixed;
        width: 100%;
        z-index: 999;
        color: white;
        font-weight: 400;
        height: 80px;
        line-height: 80px;
    }

    .top_panel.white {
        color: white;
        background-color: blueviolet;
        transition: .32s;
        top: 0;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2)
    }

    .logo {
        width: 80px;
        height: inherit;
        float: left;
    }

    .logo img {
        height: 100%;
    }

    .button {
        position: relative;
        width: 240px;
        height: inherit;
        line-height: inherit;
        text-align: center;
        float: left;
        cursor: pointer;
        height: inherit;
    }

    .button:hover {
        background-color: rgb(148, 58, 233)
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

    .cart >>> img,
    .wish >>> img {
        width: 30px;
        height: 30px;
        margin: 25px 50px 25px 0;
        transition: .32s;
    }

    .white .cart >>> img,
    .white .wish >>> img {
        width: 25px;
        height: 25px;
        margin: 12px 50px 14px 0;
    }

    a,
    a:hover,
    a:active,
    a:visited {
        color: inherit;
        text-decoration: none;
    }

    .button_catalog nav {
        display: none;
    }

    .button_catalog:hover a + nav {
        display: block;
    }
</style>




