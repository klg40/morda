<template>
    <div class="search">
        <span>
            <img src="./../../assets/images/search.svg"/>
        </span>
        <input type="text" @focus="$emit('focus')" @blur="$emit('blur')" placeholder="Поиск" v-model="value"/>
        <button>Найти</button>
    </div>
</template>

<script>
export default {
    name: 'SearchMain',
    data : function(){
        return {
            value : ''
        }
    }
}
</script>

<style scoped>
.search {
    width: 100%;
    float: left;
    background-color: white;
    border-radius: 30px;
    height: 60px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2)
}

input,
button {
    border: 0;
    outline: none;
    float: left;
}

span {
    float: left;
    height: 60px;
    width: 80px;
}

span img {
    height: 28px;
    margin-top: 17px;
    margin-left: 23px;
}

input {
    width: calc(100% - 80px);
    height: 60px;
    font-size: 18px;
    border-radius: 0 30px 30px 0;
}

input:focus {
    width: calc(100% - 145px - 80px)
}

button {
    width: 0;
    float: left;
    font-size: 18px;
    height: 60px;
    border-radius: 0 30px 30px 0;
    color:  #4d5aff;
    font-weight: bold;
    font-size: 0;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
}

input:focus + button {
    width: 145px;
    text-align: center;
    font-size: 18px;
}

button:hover {
    background-color: #4d5aff;
    color: white;
}
</style>


