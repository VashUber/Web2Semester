<template>
    <header class="header">
        <div class="logo">
            <img src="../../assets/logo.svg" alt="" class="logo__img">
        </div>
        <div class="title">
            <h1>Kanban</h1>
        </div>
        <div class="dark-mode">
            <Darkmode @current_mode="current_mode"/>
        </div>
    </header>
</template>

<script>
import Darkmode from './Darkmode'
export default({
    name: 'Header',
    data() {
        return {
            mode: ''
        }
    },
    methods: {
        current_mode: function (dataValue) {
            this.mode = dataValue
            this.$emit('current_mode', this.mode)
        }    
    },
    components: {
        Darkmode
    }
})
</script>


<style >
    .logo__img{
        width: 75px;
    }

    .header{
        transition: 1s;
        background: #5d90fc;  
        display: flex;  
        justify-content: space-between;
        align-items: center;
        padding: 5px 80px 5px 80px;
        color: #fff;
        box-shadow: 0px 3px 19px -4px rgba(34, 60, 80, 0.2);
        height: 70px;
    }
    h1{
        font-size: 2em;
    }

    .title{
        border-bottom: 2px solid #fff;
    }
    

</style>