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
      <div class="topContainer mainTitle">
        <h2>Mis Datos</h2>
        <v-icon icon="mdi-close" class="icon" @click="props.closeModal"/>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-container class="card" @click="flipCard">
          <v-row class="cardType">
            <h2>Tarjeta de Crédito</h2>
          </v-row>
          <v-row class="noMargin">
            <v-col cols="12" class="noVerPad">
              <v-text-field
                label="Número de Tarjeta"
                variant="outlined"
                clearable
                maxlength="16"
                v-model="cardNumber"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="noMargin">
            <v-col cols="6">
              <v-text-field label="Titular" variant="outlined" clearable density="compact"></v-text-field>
              <div class="creditCardDate">
                <label for="expiryDate">Fecha de Expiración (MM/AAAA):</label>
                <div class="expiryDateInput">
                  <v-text-field
                    id="expiryMonth"
                    variant="outlined"
                    maxlength="2"
                    placeholder="MM"
                    density="compact"
                    hide-details
                    style="width: 20px; color: white;"
                  ></v-text-field>
                  <span>/</span>
                  <v-text-field
                    id="expiryYear"
                    variant="outlined"
                    maxlength="4"
                    placeholder="AAAA"
                    density="compact"
                    hide-details
                    style="width: 60px; color: white;"
                  ></v-text-field>
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
        <v-text-field label="Banco Emisor" variant="outlined" clearable></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-text-field label="Código" variant="outlined" clearable maxlength="4"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn variant="outlined" rounded="xl" class="addButton" @click="deleteCard">Agregar Tarjeta</v-btn>
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

.topContainer {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  font-size: 32px;
}

.card {
  position: relative;
  width: 600px;
  min-height: 220px;
  border-radius: 10px;
  background-color: #9990FF;
  color: white;
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

.noMargin {
  margin-top: 0px;
}

.noVerPad {
  padding-bottom: 0px;
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

.expiryDateInput span {
  font-size: 18px;
  color: white;
}

.addButton {
  border-radius: 40px;
  background-color: white;
  color: #5538EE;
  margin-bottom: 30px;
}
</style>
