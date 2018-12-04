<template>
  <nav>
    <div class="nav_item" 
         v-for="item in categories" 
         :key="item.id" 
         :class="{ 'parent_category' : item.sub }"
         @mouseover="ShowSub(item.sub)"
         @blur="BlurSub(item.sub)">
      <nuxt-link :to="'/goods/' + item.url" :query="{ title : item.name }">{{item.name}}</nuxt-link>
    </div>
    <div class="sub_menu" v-show="submenu">
      <nuxt-link :to="'/goods/' + subitem.url" :query="{ title : subitem.name }" v-for="subitem in submenu" :key="subitem.id">
        <div class="sub_menu_item">
          <img src="../../assets/images/icons/tshirt.svg" alt=""/>
          {{subitem.name}}
        </div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name : 'CatalogMenu',
    computed : {
      categories : function() {
        return this.$store.getters.categories
      }
    },
    data : function() {
      return {
        submenu : false
      }
    },
    methods : {
      ShowSub : function(submenu) {
        this.submenu = submenu;
        console.dir(this.submenu);
      },
      BlurSub : function() {
        this.submenu = false
      }
    }
  }
</script>

<style scoped>
  nav {
    min-width: 240px;
    background-color: white;
    color: #171717;
    font-size: 14px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, .2)
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  nav .nav_item,
  .sub_menu_item {
    position: relative;
    padding: 0 25px 0 15px;
    border-bottom: 1px solid #efefef;
    text-align: left;
  }

  .nav_item.parent_category:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    right: 10px;
    top: 18px;
    background-size: contain;
    background-image: url(../../assets/images/arrow.svg);
  }

  .nav_item:hover,
  .sub_menu_item:hover {
    cursor: pointer;
    background-color: #efefef;
  }

  .nav_item:hover::after {
    opacity: .7
  }

  .sub_menu {
    position: absolute;
    top: 47px;
    left: 100%;
    width: auto;
    min-width: 580px;
    background-color: white;
    box-shadow: 0 6px 15px rgba(0, 0, 0, .2)
  }

  .nav_item.parent_category:hover .sub_menu {
    display: block
  }

  .sub_menu_item {
    width: 50%;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 80px;
    float: left;
    padding: 0 15px;
    line-height: 1;
    border-bottom: 0;
    color: #333;
    border: 1px solid #efefef
  }

  .sub_menu_item img {
    float: left;
    height: 30px;
    margin: 10px 20px 10px 10px;
  }
</style>


