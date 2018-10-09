import Vuex from 'vuex'
import axios from 'axios'
import FormData from 'form-data'

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
            async setGoods(context, url) {
                let body = new FormData();
                body.append("url",url.toString());
                console.log(body);
                const req = await axios.post("http://api.posrednik-rf.com/api/v1/site.listProductsForUrl", body, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept' : 'application/json'
                    }
                });
                console.log(req.data);
                context.commit('setGoods', req.data)
            },
            async setCategories(context) {
                const req = await axios.post("http://api.posrednik-rf.com/api/v1/category.list");
                context.commit('setCategories', req.data)
            }
        }
    })
}

export default store