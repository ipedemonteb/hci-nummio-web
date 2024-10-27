<script setup>
import { ref } from 'vue';
import CardBox from './CardBox.vue';
import CardPopUp from './CardPopUp.vue';
import AddCard from './AddCard.vue';

const isModalOpen = ref(false);
const isAddCardOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function openAddCard() {
  isAddCardOpen.value = true;
}

function closeAddCard() {
  isAddCardOpen.value = false;
}
</script>

<template>
  <div class="cardsContainer">
    <div class="topContainer">
      <h2 class="mainTitle">Tarjetas de Crédito:</h2>
    </div>
    
    <div class="cardsScrollContainer">
      <div class="cards">
        <div class="cardContainer" v-for="(card, index) in 6" :key="index">
          <CardBox />
          <v-icon class="icon" icon="mdi-chevron-right" @click="openModal"></v-icon>
        </div>
      </div>
    </div>
    
    <div class="buttonContainer">
      <v-btn variant="outlined" rounded="xl" class="button" @click="openAddCard">Agregar Tarjeta</v-btn>
    </div>
  </div>

  <div v-if="isModalOpen" class="modalOverlay" @click.self="closeModal">
    <div class="modalContent">
      <CardPopUp :closeModal="closeModal" />
    </div>
  </div>

  <div v-if="isAddCardOpen" class="modalOverlay" @click.self="closeAddCard">
    <div class="modalContent">
      <AddCard :closeModal="closeAddCard" />
    </div>
  </div>
</template>

<style scoped>
.cardsContainer {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 30px 40px;
  flex: 1;
}

.topContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin: 30px 0px;
}

.cardsScrollContainer {
  max-height: 400px; 
  overflow-y: auto;
}

.cardContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cards {
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  gap: 20px;
}

.icon {
  color: black;
  font-size: 24px;
  cursor: pointer;
  margin: 20px;
}

.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.button {
  border-radius: 40px;
  background-color: white;
  color: #5538EE;
  width: 200px;
}
</style>
