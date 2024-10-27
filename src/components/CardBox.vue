<template>
    <v-card class="cardContainer">
      <v-row>
          <v-col cols="8" class="d-flex flex-column justify-center">
          <div class="cardDetails">
              <h3 class="bankName">{{ bankName }}</h3>
              <div class="cardNumberCont">
              <p class="cardNumber">****</p>
              <p class="cardNumber">{{ cardNumber }}</p>
              </div>
          </div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center align-center">
          <img :src="cardLogo" alt="logo" class="cardLogo"/>
          </v-col>
      </v-row>
    </v-card>
</template>
  
  <style scoped>
    .outerContainer {
      width:100;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cardContainer {
      background-color: #9990FF;
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
        background-color: #6B4EFF;
        border-radius: 4px;
        flex-grow: 0;
        max-width: fit-content;
    }
  
    .cardLogo {
      width: 70px;
    }
  </style>
  
  <script setup>

  const props = defineProps({
    bankName: String,
    cardNumber: String,
    cardLogo: String
  });
  </script>
  