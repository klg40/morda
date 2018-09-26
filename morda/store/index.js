import Vuex from 'vuex'
import axios from 'axios'
import FormData from 'form-data'

const store = () => {
    return new Vuex.Store({
        state : {
            post : []
        },
        getters : {
            post( state ) {
                return state.post
            }
        },
        mutations : {
            getPost ( state, posts ) {
                state.post = posts
            }
        },
        actions : {
            async getPost(context, id) {
                console.log('ID ', id);
                var body = new FormData();
                body.append( 'categoryId' , id );
                console.dir(body); 
                const req = await axios.post("http://api.posrednik-rf.com/api/v1/site.listProductsForCategory", body, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                });
                context.commit('getPost', req.data)
            }
        }
    })
}

export default store