<template>
  <section>
      <Slider></Slider>
      <Catalog :data="data"></Catalog>
      <div class="container">
          <Block :category="block1"></Block>
          <Block :category="block2"></Block>
      </div>
      <Catalog :data="data2"></Catalog>
  </section>
</template>

<script>
import HeaderMain from './../components/main/HeaderMain.component'
import Slider from './../components/main/Slider.component'
import Catalog from './../components/main/Catalog.component'
import Block from './../components/elements/block.component'

export default {
  components: {
    HeaderMain,
    Slider,
    Catalog,
    Block
  },
  methods:{},
  data : function(){
    return {
      block1 : {
                title : 'Товары для дома',
                color : '#fff343',
                image : '/vaza.png',
                links : [
                  { title : 'Вазы', href : '' },
                  { title : 'Люстры', href : '' },
                  { title : 'Картины', href : '' },
                  { title : 'Статуэтки', href : '' },
                  { title : 'Книги', href : '' },
                  { title : 'Декоративные изделия', href : '' },
                  { title : 'Ковры', href : '' },
                  { title : 'Картины', href : '' },
                  { title : 'Картины', href : '' },
                  { title : 'Картины', href : '' },
                ],
                fontColor : 'black'
      },
      block2 : {
                title : 'Все для школьника',
                color : '#ff4359',
                image : '/child.png',
                links : [
                  { title : 'Вазы', href : '' },
                  { title : 'Люстры', href : '' },
                  { title : 'Картины', href : '' },
                  { title : 'Статуэтки', href : '' },
                  { title : 'Книги', href : '' },
                  { title : 'Декоративные изделия', href : '' },
                  { title : 'Ковры', href : '' },
                  { title : 'Картины', href : '' },
                  { title : 'Картины', href : '' },
                  { title : 'Картины', href : '' },
                ],
                fontColor : 'white'
      },
      data : [
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                }
      ],
      data2 : [
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                },
                {
                    title : 'Бамбинизончик',
                    price : 2999
                }
            ],
    }
  }
}
</script>

<style>
@import "//fonts.fontstorage.com/import/mplusrounded1c.css";

body {
  font-family: 'M PLUS Rounded 1c';
  font-size: 18px;
  font-weight: 400;
}

* {
  box-sizing: border-box
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

</style>

