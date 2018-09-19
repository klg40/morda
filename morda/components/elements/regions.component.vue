<template>
    <div class="regions">
        <div class="regions_selected"></div>
        <div class="rigions_list" :class="{ open : open }">
            <div class="regions_list_item" 
                 v-for="region in regions" 
                 @click="open != open"
                 :key="region.id">{{region.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Regions',
    data : function() {
        return {
            open : false,
            regions : [
                { name : 'Калуга', id : 1 },
                { name : 'Тула', id : 2 }
            ]
        }
    }
}
</script>

<style scoped>
    .rigions {
        display: inline-block;
    }

    .regions_list {
        display: none
    }

    .regions_list.open {
        display: block
    }
</style>


