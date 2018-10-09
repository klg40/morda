<template>
    <div class="wish" :class="{ main : main }">
        <img src="./../../assets/images/icons/wish.svg"/>
    </div>
</template>

<script>
export default {
    name: 'WishList',
    props : {
        main : {
            type : Boolean,
            default : false,
            required : false
        }
    },
    data : function() {
        return {
            click : false
        }
    },
    methods : {
        Click : function() {
            this.click = true;
            setTimeout(() => {this.click = false}, 500)
        }
    }
}
</script>

<style scoped>
    .wish {
        float: right;
        width: 80px;
        height: 50px;
        position: relative;
    }

    img {
        width: 30px;
        height: 30px;
        margin-top: 10px
    }

    .wish.main {
        float: right;
        width: 80px;
        height: 80px;
    }
</style>


