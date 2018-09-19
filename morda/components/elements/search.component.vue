<template>
    <div class="search">
        <span>
            <img src="./../../assets/images/search.svg"/>
        </span>
        <input type="text" placeholder="Поиск" @focus="$emit('focus')"/>
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style scoped>
.search {
    width: 100%;
    float: left;
    background-color: white;
    border-radius: 19px;
    height: 32px;
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
    height: 30px;
    width: 45px;
}

span img {
    height:16px;
    margin-top: 9px;
    margin-left: 18px;
}

input {
    width: 100%;
    height: 32px;
    font-size: 15px;
    
}

button {
    width: calc(25% - 45px);
    float: left;
    font-size: 15px;
    height: 32px;
    border-radius: 0 19px 19px 0;
    color: white;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
}
</style>


