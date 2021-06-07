<template>
    <header class="header">
        <div class="logo">
            <img src="../../assets/logo.svg" alt="" class="logo__img">
        </div>
        <div class="title">
            <h1>Kanban</h1>
        </div>
        <div class="dark-mode">
            <p>Темная тема</p>
        </div>
    </header>
</template>

<script>

export default({
    name: 'Header'    
})
</script>


<style scoped>
    .logo__img{
    width: 75px;
    }

    .header{
        background: #5d90fc;  
        display: flex;  
        justify-content: space-between;
        align-items: center;
        padding: 5px 80px 5px 80px;
        color: #fff;
        box-shadow: 0px 3px 19px -4px rgba(34, 60, 80, 0.2);
        margin-bottom: 70px;
    }
    h1{
        font-size: 2em;
    }

    .title{
        border-bottom: 2px solid #fff;
    }

</style>