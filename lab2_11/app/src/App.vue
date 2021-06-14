<template>
  <div class="body" :class="{ dark: mode }">
    <Header  @current_mode="current_mode"/>
    <Main />
    <Footer />   
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

export default {
  name: 'App',
  data() {
    return {
      mode: ''
    }
  },
  methods: {
    current_mode(dataValue){
      this.mode = dataValue
    }
  },
  components: {
    Header,
    Main,
    Footer
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .body{
    max-width: 2560px;
    overflow-x: hidden;
    margin: 0 auto;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
  }

  .body.dark .header{
    transition: 1s;
    background: #111c35;
    color: #dce3ff;
  }

  .body.dark .main{
    transition: 1s;
    background: #1d2f5a;
  }

  .body.dark .footer{
    transition: 1s;
    background: #111c35;  
  }

  .body.dark .footer .link{
    transition: 1s;
    color: #dce3ff;  
  }
  
  .body.dark .main .block{
    transition: 1s;
    background: #4c5d8a;
  }

  .body.dark .main .button{
    transition: 1s;
    background: #111c35; 
    color: #dce3ff;
  }

  .body.dark .title h1{
    border-bottom: 3px solid #dce3ff;
  }

  .body.dark .card{
    transition: 1s;
    background: #dce3ff;;
  }

  .body.dark .modal-wrapper{
    background: #dce3ff;
  }

</style>
