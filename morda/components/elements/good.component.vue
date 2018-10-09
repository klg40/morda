<template>
    <div class="good">
        <div class="image" 
             style="background-image: url('/bamb.jpg')">
             <div class="category"></div>
        </div>
        <div class="information">
            <div class="title">{{info.title}}</div>
            <div class="description">
                {{info.description}}
            </div>
            <div class="price">
                    {{info.price}} <span>₽</span>
            </div>
            <div class="button_group">
                <div class="button">
                    <div class="button_details">Подробнее</div>
                    <div class="button_cart">В корзину</div>
                </div>
            </div>
            <div class="seller">ООО "Бомбинизончик"</div>
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
        text-align: center;
        padding-top: 10px;
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
        line-height: 50px;
        text-align: center;
        cursor: pointer;
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

    .good:hover .button_group {
        transform: translateY(0);
        opacity: 1;
    }
</style>


