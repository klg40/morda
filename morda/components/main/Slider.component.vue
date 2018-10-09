<template>
    <div class="slider" id="slider">
         <HeaderMain></HeaderMain>
        <div class="search_container" :class="{ full : full }">
            <SearchMain @focus="full = true" @blur="full = false"></SearchMain>
        </div>
    </div>
</template>

<script>
import SearchMain from './../elements/searchMain.component'
import HeaderMain from './HeaderMain.component'

export default {
    name: 'Slider',
    components : { SearchMain, HeaderMain },
    data : function(){
        return {
            full : false
        }
    }
}
</script>

<style scoped>
    .slider {
        width: 100%;
        height: 60px;
        height: 550px;
        position: relative;
        background-color: blueviolet
    }

    .slider img {
        width: 100%;
        height: 450px;
    }

    .search_container {
        position: absolute;
        transition: .42s;
        bottom: 80px;
        width: 500px;
        left: calc(50% - 250px);
    }

    .search_container.full {
        width: 900px;
        left: calc(50%- 450px);
    }
</style>


