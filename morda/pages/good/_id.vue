<template>
    <div>
        <HeaderMain :white="true"></HeaderMain>
        <div class="good container">
            <div class="images">
                <img :src="'http://api.posrednik-rf.com/upload/' + image" alt="">
            </div>
            <div class="good_information">
                <h1>{{good.name}}</h1>
                <p class="price">
                  <span class="cost">{{good.price}} руб.</span>
                  <span class="organisation">{{good.organizationName}} </span> 
                </p>
                <p>{{good.description}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
import HeaderMain from '../../components/main/HeaderMain.component'

export default {
    components : { HeaderMain },
    async asyncData({ store, params }) {
        const result = await store.dispatch('setGood', params.id);
        return {
            good : result
        }
    },
    computed : {
        info : function() {
            return this.$route.query.info
        },
        image : function() {
            console.dir(this.good)
            return ''
        }
    },
    head() {
        return {
            title: 'Название категории'
        }
    }
}
</script>

<style scoped>
    .good {
        padding-top: 80px;
    }

    h1 {
        font-weight: 400;
    }

    .good_information,
    .images {
        display: block;
        overflow: auto;
        width: 49%;
        background-color: white;
        padding: 15px;
    }

    .images {
        float: left;
    }

    .good_information {
        float: right;
    }

    .good_information h1 {
        margin-bottom: 20px;
    }

    .price {
        margin-bottom: 20px;
    }

    .price span {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        line-height: 36px;
    }

    .price span.cost {
        font-size: 32px;
        font-weight: bold;
    }

    .price span.organisation {
        text-align: right
    }
</style>
