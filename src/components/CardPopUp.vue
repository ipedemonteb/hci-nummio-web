<script setup>
import { ref } from 'vue';

const isFlipped = ref(false);

function flipCard() {
    isFlipped.value = !isFlipped.value;
}
</script>

<template>
    <v-container class="cardContainer" @click="flipCard">
        <div class="cardWrapper" :class="{ flipped: isFlipped }">
            <v-container class="card front">
                <v-row class="cardType">
                    <h3>Tarjeta de Crédito</h3>
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
                    <v-col cols="3" v-for="n in 4" :key="n">
                        <h3 class="cardNumber">1234</h3>
                    </v-col>
                </v-row>
                <v-row class="noMargin">
                    <v-col cols="9">
                        <p class="cardInfo">Fernando Alonso</p>
                        <p class="cardInfo">Vto: 12/24</p>
                    </v-col>
                    <v-col cols="3">
                        <img src="/logos/mastercard.png" alt="logo" class="cardLogo"/>
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="card back">
                <div class="blackBar"></div>
                <v-container class="lowerContainer">
                    <v-row>
                        <v-col cols="6" class="backInfoContainer">
                            <div class="backInfo"></div>
                        </v-col>
                        <v-col cols="3" class="codeContainer">
                            <div class="code">
                                <p>123</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="backLogo">
                        <img src="/logos/mastercard.png" alt="logo" class="cardLogo"/>
                    </v-row>
                </v-container>
            </v-container>
        </div>
    </v-container>
</template>

<style scoped>
.cardContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}

.cardWrapper {
    cursor: pointer;
    position: relative;
    width: 400px;
    height: 220px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.flipped {
    transform: rotateY(180deg);
}

.card {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
}

.front {
    background-color: rgb(149, 149, 149);
}

.back {
    background-color: rgb(149, 149, 149);
    transform: rotateY(180deg);
}

.cardType {
    margin: 0px;
}

.cardLogo {
    width: 70px;
}

.icon {
    font-size: 30px;
}

.cardNumber {
    font-size: 25px;
    letter-spacing: 1px;
    margin: 0px 2px;
}

.noMargin {
    margin-top: 0px;
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
</style>
