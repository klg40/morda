<template>
  <section>
      <Slider></Slider>
      <MainMenu></MainMenu>
      <Catalog></Catalog>
  </section>
</template>

<script>
import HeaderMain from './../components/main/HeaderMain.component'
import Slider from './../components/main/Slider.component'
import Catalog from './../components/main/Catalog.component'

export default {
  components: {
    HeaderMain,
    Slider,
    Catalog
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

