<template>
    <div class="cart" :class="{ main : main }">
        <img src="./../../assets/images/icons/cart.svg"/>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    props : {
        main : {
            type : Boolean,
            default : false,
            required : false
        }
    }
}
</script>

<style scoped>
    .cart {
        float: right;
        width: 80px;
        height: 50px;
    }

    img {
        width: 30px;
        height: 30px;
        margin-top: 10px
    }

    .cart.main {
        float: right;
        width: 80px;
        height: 80px;
    }

    .main img {
        width: 30px;
        height: 30px;
        margin: 25px 50px 25px 0;
    }
</style>


