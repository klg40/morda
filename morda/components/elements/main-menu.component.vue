<template>
    <div class="menu">
        <div class="container">
            <div class="item_menu red">
                Товары
            </div>
            <div class="item_menu blue">
                Услуги
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MainMenu'
}
</script>

<style scoped>
    .menu {
        position: relative;
        background-color: white;
        display: table;
        width: 100%;
    }

    .item_menu {
        width: 120px;
        height: 60px;
        display: inline-block;
        color: white;
        text-align: center;
        font-size: 18px;
        line-height: 60px;
        float: left;
    }

    .red {
        color: red;
    }

    .blue {
        color: blue;
    }
</style>


