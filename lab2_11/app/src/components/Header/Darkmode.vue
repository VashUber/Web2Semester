<template lang="">
    <div class="wrapper">
        <p class="current-mode"> {{ current_mode }}</p>
        <label class="switch">
            <input type="checkbox"  @click="DarkMode" />    
            <div></div>
        </label>
    </div>
</template>

<script>
export default ({
    name: 'Darkmode',
    data() {
        return {
            mode: false,
        }
    },
    methods: {
        DarkMode(){
            this.mode = !this.mode
            this.$emit('current_mode', this.mode)
        }
    },
    computed:{
        current_mode(){
            return this.mode? 'Light mode' : 'Dark mode'
        }
    }
})
</script>

<style>

    .switch input {
        position: absolute;
        opacity: 0;
    }

    .switch {
        display: inline-block;
        font-size: 20px; 
        height: 1em;
        width: 2em;
        background: #BDB9A6;
        border-radius: 1em;
    }

    .switch div {
        height: 1em;
        width: 1em;
        border-radius: 1em;
        background: #FFF;
        box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3);
        -webkit-transition: all 300ms;
            -moz-transition: all 300ms;
                transition: all 300ms;
    }

    .switch input:checked + div {
        -webkit-transform: translate3d(100%, 0, 0);
            -moz-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
    }

    .wrapper{
        display: flex;
        align-items: center;
        width: 140px;
    }
    .current-mode{
        margin-right: 10px;
    }

</style>