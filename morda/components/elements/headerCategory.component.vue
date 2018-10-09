<template>
    <div>HeaderCategory</div>
</template>

<script>
import HeaderMain from './../main/HeaderMain.component'

export default {
    name : 'headerCategory',
    components : { HeaderMain },
    props : {
        title : {
            type : String,
            required : true
        }
    }
}
</script>

<style scoped>
    .category_header {
        width: 100%;
        display: block;
        overflow: hidden;
        height: 270px;
    }

    .top_panel {
        position: absolute;
        width: 100%;
    }

    h1 {
        text-align: center;
        margin: 0;
        line-height: 270px;
        font-size: 48px;
        color: white;
        background-color: rgba(0,0,0,0.2)
    }
</style>


