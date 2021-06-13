<template>
  <main class="main">
    <button class="button">Создать задачу</button>
    <div class="blocks">
        <div class="block">
                
        </div>
        <div class="block">

        </div>
        <div class="block">

        </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>


<style scoped>
    main {
        min-height: calc(100vh - 280px);  
        padding: 70px 8% 70px 8%;
    }
    .blocks{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .block {
        min-height: 415px;
        width: 30%;
        max-width: 320px;
        background: #e7faff;
    }
    .button{
        margin-bottom: 20px;
        background: #5d90fc;
        border: none;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
    }
</style>