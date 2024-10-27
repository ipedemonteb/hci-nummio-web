<script setup>
import { ref, watch, defineProps } from 'vue';
import { useCardsStore } from '@/stores/cards';

const props = defineProps({
  closeModal: Function
});

const cardsStore = useCardsStore();

const snackBarNumberMessage= ref('');
const snackbar = ref(false);
const snackbarMessage = ref('');

const cardNumber = ref('');
const cardLogo = ref('');
const cardHolder = ref('');
const expiryMonth = ref('');
const expiryYear = ref('');
const bank = ref('');
const cvv = ref('');

function isCardNumberValid(cardNumber) {
  return true; //@TODO: ver si hace falta y sacarla si no
}

function isExpiryDateValid(expiryMonth, expiryYear) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  if (expiryYear < currentYear || (expiryYear == currentYear && expiryMonth < currentMonth)) {
    return false;
  }
  return true;
}

const handleAddCard = (event) => {
  if ( isNaN(parseInt(cardNumber.value)) || !isCardNumberValid(event.target.value)) {
    snackbar.value = true;
    snackbarMessage.value = 'Ingrese un número de tarjeta válido';
  }
  else if(cardHolder.value === "") {
    snackbar.value = true;
    snackbarMessage.value = "Debe ingresar un titular";
  }
  else if (isNaN(parseInt(expiryMonth.value)) || isNaN(parseInt(expiryYear.value))) {
    snackbar.value = true;
    snackbarMessage.value = 'Ingrese una fecha de vencimiento válida';
  }
  else if(!isExpiryDateValid(parseInt(expiryMonth.value), parseInt(expiryYear.value))) {
    snackbar.value = true;
    snackbarMessage.value = 'La tarjeta de crédito ya expiró';
  }
  else if(bank.value === "") {
    snackbar.value = true;
    snackbarMessage.value = "Debe ingresar un banco emisor";
  }
  else if (isNaN(parseInt(cvv.value)) || cvv.value.length < 3) {
    snackbar.value = true;
    snackbarMessage.value = 'Ingrese un código de seguridad válido';
  }
  else {
    snackbar.value = false;
    snackbarMessage.value = "";
    cardsStore.addCard(parseInt(cardNumber.value), cardHolder.value, parseInt(expiryMonth.value), parseInt(expiryYear.value), bank.value, parseInt(cvv.value))
    props.closeModal();
  }
};

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
                variant="outlined"
                clearable
                minlength="16"
                maxlength="16"
                v-model="cardNumber"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="noMargin">
            <v-col cols="6">
              <v-text-field label="Titular" variant="outlined" clearable density="compact" v-model="cardHolder"></v-text-field>
              <div class="creditCardDate">
                <label for="expiryDate">Fecha de Expiración (MM/AAAA):</label>
                <div class="expiryDateInput">
                  <input
                    id="expiryMonth"
                    type="text"
                    minlength="2"
                    maxlength="2"
                    placeholder="MM"
                    v-model="expiryMonth"
                  />
                  <span>/</span>
                  <input
                    id="expiryYear"
                    type="text"
                    minlength="4"
                    maxlength="4"
                    placeholder="AAAA"
                    v-model="expiryYear"
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
        <v-text-field label="Banco Emisor" variant="outlined" clearable v-model="bank"></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-text-field label="Código" variant="outlined" clearable maxlength="4" v-model="cvv"></v-text-field>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="3000" color="error">{{ snackbarMessage }}</v-snackbar>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn class="addButton" @click="handleAddCard">Agregar Tarjeta</v-btn> 
      </v-col>
    </v-row> 
  </v-container>
</template>

<style scoped>
/*@input="handleCardNumberInput"
cardsStore.addCard(parseInt(cardNumber), cardHolder, parseInt(expiryMonth), parseInt(expiryYear), bank, parseInt(cvv))" */
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
