import Vuex from 'vuex'
import axios from 'axios'
var FormData = require('form-data')

const store = () => {
    return new Vuex.Store({
        state : {
            goods : [],
            categories : {}
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
            }
        },
        mutations : {
            setGoods ( state, goods ) {
                state.goods = goods
            },
            setCategories( state, categories ) {
                state.categories = categories
            }
        },
        actions : {
            async setGoods(context, id) {
                var body = new FormData();
                body.append('url', id);
                const req = await axios.post("http://api.posrednik-rf.com/api/v1/site.listProductsForUrl", body);
                console.log(req.data);
                context.commit('setGoods', req);
                return req.data
            },
            async setCategories(context) {
                const req = await axios.post("http://api.posrednik-rf.com/api/v1/category.list");
                context.commit('setCategories', req.data)
            }
        }
    })
}

export default store