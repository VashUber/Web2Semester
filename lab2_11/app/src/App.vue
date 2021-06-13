<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    max-width: 2560px;
    overflow-x: hidden;
    margin: 0 auto;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
  }
</style>
