<template>
  <main class="main">
    <Modal
      class="modal"
      v-if="isVisible"
      @Close="CloseModal"
      @GetData="GetData"
    />

    <ModalEdit
      class="modal"
      v-if="isEdit"
      @CloseEdit="CloseEdit"
      @Edit="EditCard"
      :data="this.dataProp"
    />
    <button class="button" @click="ShowModal()">Создать задачу</button>
    <div class="blocks">
      <div
        class="block"
        id="1"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <h2>План {{ tasks.filter(elem => elem.id == 1).length }} </h2>
        <div
          v-for="item in tasks"
          :key="item.id"
          class="card"
          v-show="item.id == 1"
          @dragstart="onDragStart($event, item)"
          draggable="true"
        >
          <div class="card-header">
            <h2>Задача № {{ item.number }}</h2>
            <p
              class="priority"
              :class="{
                first: item.priority == '1',
                second: item.priority == '2',
                third: item.priority == '3',
              }"
            >
              {{ item.priority }}
            </p>
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
            <button
              class="card-footer__button notActive"
              @click="previousStep(item)"
            >
              ←
            </button>
            <button class="card-footer__button" @click="Edit(item)">
              edit
            </button>
            <button class="card-footer__button" @click="nextStep(item)">
              →
            </button>
          </div>
        </div>
      </div>
      <div
        class="block"
        id="2"
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <h2>В работе {{ tasks.filter(elem => elem.id == 2).length }}</h2>
        <div
          v-for="item in tasks"
          :key="item.id"
          class="card"
          v-show="item.id == 2"
          @dragstart="onDragStart($event, item)"
          draggable="true"
        >
          <div class="card-header">
            <h2>Задача № {{ item.number }}</h2>
            <p
              class="priority"
              :class="{
                first: item.priority == '1',
                second: item.priority == '2',
                third: item.priority == '3',
              }"
            >
              {{ item.priority }}
            </p>
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
            <button class="card-footer__button" @click="previousStep(item)">
              ←
            </button>
            <button class="card-footer__button" @click="Edit(item)">
              edit
            </button>
            <button class="card-footer__button" @click="nextStep(item)">
              →
            </button>
          </div>
        </div>
      </div>
      <div
        class="block"
        id="3"
        @drop="onDrop($event, 3)"
        @dragenter.prevent
        @dragover.prevent
      >
        <h2>Готово {{ tasks.filter(elem => elem.id == 3).length }}</h2>
        <div
          v-for="item in tasks"
          :key="item.id"
          class="card"
          v-show="item.id == 3"
          @dragstart="onDragStart($event, item)"
          draggable="true"
        >
          <div class="card-header">
            <h2>Задача № {{ item.number }}</h2>
            <p
              class="priority"
              :class="{
                first: item.priority == '1',
                second: item.priority == '2',
                third: item.priority == '3',
              }"
            >
              {{ item.priority }}
            </p>
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
            <button class="card-footer__button" @click="previousStep(item)">
              ←
            </button>
            <button class="card-footer__button" @click="Edit(item)">
              edit
            </button>
            <button class="card-footer__button" @click="nextStep(item)">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script >
import Modal from "../Modal/Modal";
import ModalEdit from "../Modal/ModalEdit";

export default {
  name: "Main",
  components: {
    Modal,
    ModalEdit,
  },
  data() {
    return {
      isVisible: false,
      tasks: [],
      description: "",
      priority: "",
      number: 0,
      date: "",
      current_id: "",
      id: 1,
      isEdit: false,
      dataProp: "",
    };
  },
  methods: {
    ShowModal() {
      return (this.isVisible = !this.isVisible);
    },
    onDragStart(event, item) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("number", item.number);
    },
    onDrop(event, id) {
      const itemId = event.dataTransfer.getData("number");
      const item = this.tasks.find((item) => item.number == itemId);
      item.id = id;
    },

    Edit(data) {
      this.CloseEdit();
      return (this.dataProp = data);
    },
    CloseEdit() {
      this.isEdit = !this.isEdit;
    },
    EditCard(data) {
      this.object = this.tasks.find((elem) => elem.number === data[2]);
      this.object.description = data[0];
      this.object.priority = data[1];
      this.CloseEdit()
    },
    CloseModal() {
      return (this.isVisible = !this.isVisible);
    },
    GetData(data) {
      this.number += 1;
      this.date = new Date();
      this.date = this.formatDate(this.date);
      const NewCard = {
        description: data[0],
        priority: data[1],
        number: this.number,
        date: this.date.toString(),
        id: this.id,
      };
      this.tasks.push(NewCard);
      this.CloseModal();
    },
    formatDate(date) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const h = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
      const m =
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      // example: 16:09 14 June 2021
      return `${h}:${m} ${day} ${monthNames[monthIndex]} ${year}`;
    },
    nextStep(item) {
      this.object = this.tasks.find((elem) => elem.number === item.number);
      this.index = this.tasks.findIndex((elem) => elem.number === item.number)
      if (this.object.id < 3) this.object.id += 1;
      else this.tasks.splice(this.index , 1);
    },
    previousStep(item) {
      this.object = this.tasks.find((elem) => elem.number === item.number);
      if (this.object.id <= 3 && this.object.id > 1) this.object.id -= 1;
    },
  },
};
</script>


<style>
main {
  transition: 1s;
  min-height: calc(100vh - 280px);
  padding: 70px 8% 70px 8%;
}
.blocks {
  display: flex;
  justify-content: space-between;
}
.block {
  transition: 1s;
  min-height: 395px;
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
.button {
  margin-bottom: 20px;
  background: #5d90fc;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: 0.8s;
}
.button:hover {
  transition: 0.8s;
  background: #4974d1;
}

.modal {
  position: fixed;
  left: 50%;
  margin-left: -168px;
  top: 30%;
  box-shadow: 0px 0px 8px 100vh rgba(34, 60, 80, 0.2);
}

.card {
  width: 80%;
  min-height: 200px;
  background: #fff;
  color: #4974d1;
  padding: 8px;
  border: 2px solid #4974d1;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: 1s;
}

.text {
  word-break: break-all;
  margin-bottom: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.priority {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #4974d1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
}
.card-content {
  min-height: 56%;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.card-footer__button {
  width: 40px;
  height: 40px;
  border: 2px solid #4974d1;
  outline: none;
  border-radius: 10px;
  background: #bad0ff;
}

.card-footer .card-footer__button:hover {
  background: #91aff0;
}

.block h2 {
  color: #4974d1;
  margin-bottom: 10px;
}

.notActive {
  background: #f3f6fd;
  border: 2px solid #b9b9b9;
}

.card-footer__button.notActive:hover {
  background: #f3f6fd;
}

.first {
  background: #ff8f8f;
}

.second {
  background: #fffd7d;
}

.third {
  background: #89ff9d;
}
</style>