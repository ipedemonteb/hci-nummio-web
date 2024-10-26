<template>
    <v-card class="cardContainer">
      <v-row>
          <v-col cols="8" class="d-flex flex-column justify-center">
          <div class="cardDetails">
              <h3 class="bankName">Banco Galicia</h3>
              <div class="cardNumberCont">
              <p class="cardNumber">****</p>
              <p class="cardNumber">1234</p>
              </div>
          </div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center align-center">
          <img src="/logos/mastercard.png" alt="logo" class="cardLogo"/>
          </v-col>
      </v-row>
    </v-card>
  </template>
  
  <style scoped>
    .cardContainer {
      background-color: rgb(149, 149, 149);
      border-radius: 20px;
      padding: 20px 30px;
      color: white;
      width: 100%;
    }
  
    .bankName {
      margin: 0;
      font-size: 18px;
      font-weight: bold;
    }
  
    .cardNumber {
      font-size: 14px;
      letter-spacing: 2px;
      margin: 0px 2px;
    }

    .cardNumberCont {
        margin: 5px 0 0;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #6c6c6c;
        border-radius: 4px;
        flex-grow: 0;
        max-width: fit-content;
    }
  
    .cardLogo {
      width: 70px;
    }
  </style>
  
  <script setup>
  </script>
  