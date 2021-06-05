<template>
  <Header />
</template>

<script>
import Header from './components/Header/Header'

export default {
  name: 'App',
  components: {
    Header 
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    max-width: 1920px;
    margin: 0 auto;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
  }
</style>
