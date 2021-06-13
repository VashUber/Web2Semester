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


<style>
    main {
        transition: 1s;
        min-height: calc(100vh - 280px);  
        padding: 70px 8% 70px 8%;
    }
    .blocks{
        display: flex;
        justify-content: space-between;
    }
    .block {
        transition: 1s;
        min-height: 415px;
        height: auto;
        width: 30%;
        max-width: 320px;
        background: #e7faff;
        box-shadow: 5px 10px 11px -2px rgba(34, 60, 80, 0.2);
    }
    .button{
        margin-bottom: 20px;
        background: #5d90fc;
        border: none;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        transition: 0.8s;
    }
    .button:hover{
        transition: 0.8s;
        background: #4974d1;
    }
</style>