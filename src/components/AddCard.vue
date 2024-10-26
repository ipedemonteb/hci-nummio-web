<script setup>
import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  closeModal: Function
});

const cardNumber = ref('');
const cardLogo = ref('');

watch(cardNumber, (newValue) => {
  if (newValue) {
    const firstDigit = newValue[0];
    switch (firstDigit) {
      case '4':
        cardLogo.value = '/logos/visa.png';
        break;
      case '5':
        cardLogo.value = '/logos/mastercard.png';
        break;
      case '3':
        /* if (newValue[1] === '4' || newValue[1] === '7') {
          cardLogo.value = '/logos/amex.png';
        } else {
          cardLogo.value = '';
        } */
        cardLogo.value = '/logos/amex.png';
        break;
      default:
        cardLogo.value = '';
    }
  } else {
    cardLogo.value = '';
  }
});
</script>

<template>
  <v-container class="cardContainer">
    <v-row>
      <v-col cols="10" align-content="center">
        <h1>Agregar Tarjeta</h1>
      </v-col>
      <v-col cols="2" class="closeIcon">
        <v-icon icon="mdi-close" @click="props.closeModal"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-container class="card" @click="flipCard">
          <v-row class="cardType">
            <h2>Tarjeta de Crédito</h2>
          </v-row>
          <v-row class="noMargin">
            <v-col cols="1">
              <v-icon icon="mdi-credit-card-chip" class="icon"/>
            </v-col>
            <v-col cols="1">
              <v-icon icon="mdi-contactless-payment" class="icon"/>
            </v-col>
          </v-row>
          <v-row class="noMargin">
            <v-col cols="12" class="noVerPad">
              <v-text-field
                label="Número de Tarjeta"
                outlined
                clearable
                maxlength="16"
                v-model="cardNumber"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="noMargin">
            <v-col cols="6">
              <v-text-field label="Titular" outlined clearable density="compact"></v-text-field>
              <div class="creditCardDate">
                <label for="expiryDate">Fecha de Expiración (MM/AAAA):</label>
                <div class="expiryDateInput">
                  <input
                    id="expiryMonth"
                    type="text"
                    maxlength="2"
                    placeholder="MM"
                  />
                  <span>/</span>
                  <input
                    id="expiryYear"
                    type="text"
                    maxlength="4"
                    placeholder="AAAA"
                  />
                </div>
              </div>
            </v-col>
            <v-col cols="6" class="cardLogoContainer">
              <img v-if="cardLogo" :src="cardLogo" alt="logo" class="cardLogo" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" class="d-flex justify-center">
        <v-text-field label="Banco Emisor" outlined clearable></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-text-field label="Código" outlined clearable maxlength="4"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="addButton" @click="deleteCard">Agregar Tarjeta</v-btn> 
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.cardContainer {
    display: block !important;
    min-width: 600px;
    perspective: 1000px;
}

.cardWrapper {
    
}

.closeIcon {
    text-align: right;
}

.card {
    position: relative;
    width: 600px;
    min-height: 220px;
    border-radius: 10px;
    background-color: rgb(149, 149, 149);
}

.cardType {
    margin: 0px;
}

.cardLogoContainer {
    text-align: right;
}

.cardLogo {
    width: 70px;
}

.icon {
    font-size: 35px;
}

.cardNumber {
    font-size: 25px;
    letter-spacing: 1px;
    margin: 0px 2px;
}

.noMargin {
    margin-top: 0px;
}

.noVerPad {
    padding-bottom: 0px;
}

.cardInfo {
    font-size: 18px;
}

.blackBar {
    background-color: black;
    height: 40px;
    margin: 10px -16px;
}

.backInfoContainer {
    padding: 20px 0px;
}

.codeContainer {
    padding: 20px 20px 0px 5px;
}

.lowerContainer {
    padding: 0px 10px;
}

.backInfo {
    background-color: grey;
    height: 30px;
    border-radius: 10px;
}

.backLogo {
    margin-top: 30px;
}

.code {
    background-color: white;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.addButton {
    border-radius: 20px;
    height: 40px;
    background-color: #5538EE;
    color: white;
}

.creditCardDate {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.expiryDateInput {
  display: flex;
  align-items: center;
  gap: 5px;
}

.expiryDateInput input {
  width: 50px;
  padding: 8px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.expiryDateInput span {
  font-size: 18px;
}
</style>
