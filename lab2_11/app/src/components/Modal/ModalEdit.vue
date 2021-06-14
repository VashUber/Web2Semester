<template>
    <div class="modal-wrapper">
        <div class="header-modal">
            <button 
                class="close"
                @click='CloseEdit'
            >X</button>
        </div>    
        <div class="content-modal">
            <div class="form">
                <form action="#" @submit.prevent="Edit">
                    <label for="">Описание</label>
                    <input type="text" v-model="description">
                    <label for="">Приоритет</label>
                    <select name="" id="" v-model="priority">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button>Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ModalEdit',
    props: ['data'],
    data() {
        return {
            description: this.data.description,
            priority: this.data.priority,
            number: this.data.number
        }
    },
    methods: {
        CloseEdit(){
            this.$emit('CloseEdit')
        },
        Edit(){
            let data = [this.description, this.priority, this.number]
            if (this.description != '' && this.priority != ''){
                this.$emit('Edit', data)
                this.description = ''
                this.priority = ''
            }
        }
        
    },

}

</script>

<style scoped>
    .close{
        width: 35px;
        height: 35px;
        font-size: 20px;
        border: 2px solid #4974d1;
        background: #84aafc;
        color: #4974d1;
        font-weight: bold;
        border-radius: 100%;
    }

    .close:hover{
        transition: .5s;
        background: #658de4;
    }
    
    .modal-wrapper{
        width: 300px;
        height: 300px;
        background: #fff;
        border: 2px solid #4974d1;
        border-radius: 10px;
        padding: 15px;
    }

    .header-modal{
        display: flex;
        justify-content: flex-end;
    }

    .form form{
        color: #4974d1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    label{
        margin-top: 10px;
    }
    input, select{
        margin-top: 10px;
        padding: 10px;
        width: 240px;
        outline: none;
        background: #b0c9ff;
        font-size: 20px;
        color: #fff;
        border-radius: 10px;
        border: 2px solid #4974d1;
    }

    select{
        width: 265px;
    }

    button{
        margin-top: 20px;
        padding: 5px;
        border: none;
        background: #4974d1;
        color: #fff;
    }

</style>