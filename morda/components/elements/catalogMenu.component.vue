<template>
  <nav>
    <div class="nav_item" v-for="item in categories" :key="item.id" :class="{ 'parent_category' : item.sub }">
      <nuxt-link :to="'/goods/' + item.url" :query="{ title : item.name }">{{item.name}}</nuxt-link>
      <div class="sub_menu" v-if="item.sub">
        <div class="sub_menu_item" v-for="subitem in item.sub" :key="subitem.id">
          <nuxt-link :to="'/goods/' + subitem.url" :query="{ title : subitem.name }">{{subitem.name}}</nuxt-link>
        </div>
      </div>
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
    display: none;
    top: 0;
    left: 100%;
    width: auto;
    min-width: 240px;
    background-color: white;
    box-shadow: 0 6px 15px rgba(0, 0, 0, .2)
  }

  .nav_item.parent_category:hover .sub_menu {
    display: block
  }

  .sub_menu_item {
    padding: 0 15px;
  }
</style>


