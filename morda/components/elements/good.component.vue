<template>
    <div class="good" :class="{ 'seller_visible_info' : hoverSellerBlock }" @mouseleave="hoverSellerBlock = false">
        <div class="image" 
             :style="{ backgroundImage : `url(http://api.posrednik-rf.com/upload/${image})`}">
             <div class="category"></div>
        </div>
        <div class="information">
            <div class="title">{{info.name}}</div>
            <div class="description">
                {{info.description}}
            </div>
            <div class="price">
                    {{info.price}} <span>₽</span>
            </div>
            <div class="button_group">
                <div class="button">
                    <div class="button_details">
                        <nuxt-link :to="'/good/' + info.url">Подробнее</nuxt-link></div>
                    <div class="button_cart">В корзину</div>
                </div>
            </div>
            <div class="seller" @mouseover="getInfoSeller(info.organizationId)">{{info.organizationName}}</div>
            <div class="seller_info" v-if="sellerInfo !== null">
                <div class="table">
                    <div class="row">
                        <div class="caption">График работы:</div>
                        <span v-html="schedule"></span>
                    </div>
                    <div class="row">
                        <div class="caption">Телефон:</div>
                         {{sellerInfo.telephone}}
                    </div>
                    <div class="row">
                        <div class="caption">Email:</div>
                         {{sellerInfo.email}}
                    </div>
                    <div class="row">
                        <div class="caption">Адрес:</div>
                         {{sellerInfo.address}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Good',
        props : {
            info : {
                type: Object
            }
        },
        computed : {
            schedule : function() {
                return this.sellerInfo.schedule.replace(';',';<br>')
            },
            image : function() {
                return this.info.images.split('|')[0]
            }
        },
        data : function() {
            return {
                sellerInfo : null,
                hoverSellerBlock : false
            }
        },
        methods : {
            getInfoSeller : async function( id ) {
                this.hoverSellerBlock = true;
                this.sellerInfo = await this.$store.dispatch('getSellerInfo', id)
            }
        }
    }
</script>

<style scoped>
    .good {
        width: 23%;
        margin: 1%;
        float: left;
        border-radius: 12px;
        height: 465px;
        overflow: hidden;
        position: relative;
        background-color: white;
        box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1)
    }

    a {
        display: table;
        width: 100%;
        text-align: center;
        color: white;
        text-rendering: auto;
        text-decoration: none;
    }

    .image {
        background-size: cover;
        width: 100%;
        height: 299px;
        border-radius: 12px 12px 0 0;
        transition: .4s;
    }

    .information {
        padding: 10px 15px;
    }

    .title {
        font-size: 18px;
        font-weight: 600;
        color: black;
        text-align: center;
        display: block;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
        position: relative;
        padding-bottom: 10px
    }

    .title:after {
        position: absolute;
        content: '';
        width:80%;
        height: 3px;
        background-color: #4d5aff;
        bottom: 0;
        left: 10%;
    }

    .description {
        color: #999;
        font-size: 15px;
        line-height: 16px;
        height: 58px;
        overflow: hidden;
        text-align: center;
        padding-top: 10px;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
    }

    .price {
        position: relative;
        height: 60px;
        line-height: 60px;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden;
        font-size: 21px;
        text-align: center;
        font-weight: 600;
    }

    .seller {
        width: 100%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 14px;
        color: #757575;
        cursor: pointer;
    }

    .seller:hover {
        color: #4d5aff;
    }

    .button_group {
        background-color: #4d5aff;
        color: white;
        font-size: 15px;
        border-radius: 25px;
        height: 50px;
        width: 100%;
        transform: translateY(50px);
        opacity: 0;
        margin-bottom: 10px;
        transition: .4s;
        box-shadow: 0 6px 15px rgba(98,120,152,.6)
    }

    .button_details,
    .button_cart {
        width: 50%;
        height: 50px;
        display: inline-block;
        float: left;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
    }

    .button_details {
        border-radius: 25px 0 0 25px;
        border-right: 1px solid #2c37cc;
    }

    .button_cart {
        border-radius: 0 25px 25px 0;
    }

    .button_details:hover,
    .button_cart:hover {
        background-color: #2c37cc;
    }

    .good:hover .image {
        height: 200px;
    }

    .good.seller_visible_info .image,
    .good.seller_visible_info .description  {
        height: 0px;
    }

    .good:hover .button_group,
    .good.good.seller_visible_info {
        transform: translateY(0);
        opacity: 1;
    }

    .seller_info {
        transform: translateY(50%);
        padding: 5px 15px;
        background-color: white;
        font-size: 14px;
        opacity: 0;
        transition: .42s;
    }

    .seller_info .row {
        padding: 3px 5px;
    }

    .seller_info .caption {
        font-weight: bold;
        font-weight: 12px;
    }

    .seller_visible_info .seller_info {
        transform: translateY(0);
        opacity: 1
    }
</style>


