<template>
  <main class="main">
    <Modal 
        class="modal"
        v-if="isVisible"
        @Close='Close'
        @GetData='GetData'
    />
    <button 
        class="button"  
        @click="ShowModal"
    >
    Создать задачу</button>
    <div class="blocks">
        <div class="block" id='1' >
            <div 
                v-for="item in tasks"
                :key="item.id"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="block" id='2'>

        </div>
        <div class="block" id='3'>

        </div>
    </div>
  </main>
</template>

<script>

import Modal from '../Modal/Modal'

export default {
  name: "Main",
  components:{
      Modal
  },
  data() {
      return {
          isVisible: false,
          tasks: [{'title': '1543', 'id': 43}, {'title': '123', 'id': 21}],
          description: '',
          priority: ''
      }
  },
  methods: {
      ShowModal(){
          return this.isVisible = !this.isVisible
      },
      Close(){
          return this.isVisible = !this.isVisible
      },
      GetData(data){
          this.description = data[0]
          this.priority = data[1]
          
      }
  },
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

    .modal{
        position: fixed;
        left: 50%;
        margin-left: -168px;
        top: 30%;
        box-shadow: 0px 0px 8px 100vh rgba(34, 60, 80, 0.2);
    }

</style>