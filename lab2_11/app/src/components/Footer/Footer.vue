<template>
    <footer class="footer">
        <a href="https://github.com/VashUber" class="link">Сизов Егор 201-322</a>
    </footer>    
</template>

<script>

export default({
    name: 'Footer'
})
</script>

<style>
    .footer{
        transition: 1s;
        background: #e7faff;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }   

    .link{
        transition: 1s;
        color: #5d90fc;
        text-decoration: none;
    }
</style>
