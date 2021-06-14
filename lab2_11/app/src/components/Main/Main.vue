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
                :key="item.priority"
                class='card'
            >
                <div class="card-header">
                    <h2>Задача № {{ item.number }} </h2>
                    <p class="priority" :class=" { аа : аа} " > {{ item.priority }} </p>
                </div>
                <div class="card-content">
                    <p class="text">
                        {{ item.description }}
                    </p>
                    <p class="date">
                        {{ item.date }}
                    </p>
                </div>
                <div class="card-footer">
                    <button class="card-footer__button">←</button>
                    <button class="card-footer__button">edit</button>
                    <button class="card-footer__button">→</button>
                </div>

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
          tasks: [],
          description: '',
          priority: '',
          number: 0,
          date: ''
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
          this.number += 1
          this.date = new Date()
          this.date = this.formatDate(this.date)
          const NewCard = {
                'description':data[0],
                'priority':data[1],
                'number': this.number.toString(),
                'date': this.date.toString()
          }
          this.tasks.push(NewCard)
          console.log(this.tasks)
      },
      formatDate(date) {
			const monthNames = [
				'January', 'February', 'March',
				'April', 'May', 'June', 'July',
				'August', 'September', 'October',
				'November', 'December',
			];

			const h = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
			const m = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
			const day = date.getDate();
			const monthIndex = date.getMonth();
			const year = date.getFullYear();

			// example: 16:09 14 June 2021
			return `${ h }:${ m } ${ day } ${ monthNames[monthIndex] } ${ year }`;
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
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .card{
        width: 80%;
        min-height: 200px;
        background: #fff;
        color: #4974d1;
        padding: 8px;
        border: 2px solid #4974d1;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    .text{
        word-break: break-all;
        margin-bottom: 10px;
    }

    .card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .priority{
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 1px solid #4974d1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3em;
    }
    .card-content{
        min-height: 60%;
    }

    .card-footer{
        display: flex;
        justify-content: space-between;
    }

    .card-footer__button{
        width: 40px;
        height: 40px;
        border: 2px solid #4974d1;
        outline: none;
        border-radius: 10px;
        background: #bad0ff;
    }
    
</style>