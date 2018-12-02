import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
<<<<<<< HEAD
const FormData = require('form-data')
=======
>>>>>>> f82427a... good component and top nav component

const store = () => {
    return new Vuex.Store({
        state : {
            goods : [],
            categories : {},
            status : {
                url : ''
            }
        },
        getters : {
            goods( state ) {
                return state.goods
            },
            categories( state ) {
                return state.categories
            },
            store( state ) {
                return state
            },
            getCategory( state ) {
            }
        },
        mutations : {
            setGoods ( state, goods ) {
                state.goods = goods
            },
            setCategories( state, categories ) {
                state.categories = categories
            },
            setStatusUrl ( state, url ) {
                state.status.url = url
            }
        },
        actions : {
            async setGoods(context, id) {
                context.commit('setStatusUrl', id)
                const { data } = await axios.post("http://api.posrednik-rf.com/api/v1/site.listProductsForUrl", `url=${id}`);
                context.commit('setGoods', data.result);
            },
            async setCategories(context) {
                const req = await axios.post("http://api.posrednik-rf.com/api/v1/category.list");
                context.commit('setCategories', req.data)
            },
            async setGood( state, id ) {
                const { data } = await axios.post("http://api.posrednik-rf.com/api/v1/site.getProductUrl", `productUrl=${id}`);
                return data.result
            },
            async getSellerInfo( state, id ) {
                console.dir(id);
                const { data } = await axios.post("http://api.posrednik-rf.com/api/v1/site.getOrganization", `organizationId=${id}`);
                console.dir(data.result);
                return data.result
            }
        }
    })
}

export default store