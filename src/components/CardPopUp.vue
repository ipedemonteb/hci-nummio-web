<script setup>
import { ref, defineProps } from 'vue';
import { useCardsStore } from '@/stores/cards';

const cardsStore = useCardsStore();


const isFlipped = ref(false);
function flipCard() {
    isFlipped.value = !isFlipped.value;
}

const props = defineProps({
    closeModal: Function,
    card: Object
});

function handleDeleteCard() {
    cardsStore.removeCard(props.card.id);
    props.closeModal();
}
</script>

<template>
    <v-container class="cardContainer">
        <v-row>
            <v-col cols="10" align-content="center">
                <h1>{{ card.bank.name }}</h1>
            </v-col>
            <v-col cols="2" class="closeIcon">
                <v-icon icon="mdi-close" @click="props.closeModal"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
            <div class="cardWrapper" :class="{ flipped: isFlipped }">
                <v-container class="card front" @click="flipCard">
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
                            <h3 class="cardNumber">{{ card.number.toString().slice((n-1)*4, (n-1)*4+4) }}</h3>
                        </v-col>
                    </v-row>
                    <v-row class="noMargin">
                        <v-col cols="9">
                            <p class="cardInfo">{{ card.cardHolder }}</p>
                            <p class="cardInfo">Vto: {{ card.expirationMonth }}/{{ card.expirationYear }}</p>
                        </v-col>
                        <v-col cols="3">
                            <img :src="card.bank.image" alt="logo" class="cardLogo"/>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container class="card back" @click="flipCard">
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
                            <img :src="card.bank.image" alt="logo" class="cardLogo"/>
                        </v-row>
                    </v-container>
                </v-container>
            </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <v-btn class="deleteButton" @click="handleDeleteCard">Eliminar Tarjeta</v-btn> 
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.cardContainer {
    display: block !important;
    padding: 30px;
    min-width: 600px;
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

.closeIcon {
    text-align: right;
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

.deleteButton {
    color: red;
    border-radius: 20px;
    height: 40px;
}
</style>
