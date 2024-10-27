<template>
    <div class="movement">
        <div class="movementContainer">
            <div class="iconInfoContainer">
                <v-icon color="#6B4EFF" class="icon" size="45px" :icon="isSent ? 'mdi-arrow-top-right-bold-box-outline' : 'mdi-arrow-bottom-left-bold-box-outline'" />
                <div class="actionContainer">
                    <h4>{{ isSent ? "Transferencia enviada" : "Transferencia recibida" }}</h4>
                    <h5>{{ isSent ? "A " : "De "}} {{ otherUser }}</h5>
                </div>
            </div>
            <div class="rightContainer">
                <div class="amountContainer">
                    <h4>$ {{ amount }}</h4>
                    <h5>{{ timeDifference }}</h5>
                </div>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-btn class="detailsButton" prepend-icon="mdi-format-list-bulleted" @click="openModal">Detalles</v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <div v-if="isModalOpen" class="modalOverlay" @click.self="closeModal">
                <div class="modalContent">
                    <TransferInfo
                        :closeModal="closeModal"
                        :cvuRem="cvuRem"
                        :cvuDest="cvuDest"
                        :amount="amount"
                        :date="timeAgo"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.movement {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 5px 0px;
}

.icon {
    margin-right: 8px;
}

.movementContainer {
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.iconInfoContainer {
    display: flex;
    align-items: center;
}

.rightContainer {
    display: flex;
    align-items: center;
}

.moreOptions {
    margin-left: 10px;
}

.actionContainer h5 {
    margin-top: 0px;
    color: grey;
}

.amountContainer {
    margin-right: 5px;
}

.detailsButton {
    width: 100%;
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
</style>

<script setup>

import { ref, defineProps } from 'vue';
import TransferInfo from './TransferInfo.vue';
import { useUsersStore } from '@/stores/users';
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
    otherUser: String,
    amount: Number,
    timeAgo: Date,
    isSent: Boolean
});
const usersStore = useUsersStore()
const userLoggedIn = usersStore.getUserLoggedIn()

const isModalOpen = ref(false);
const cvuRem = props.isSent ? userLoggedIn.cvu : props.otherUser.cvu
const cvuDest = props.isSent ? props.otherUser.cvu : userLoggedIn.cvu
const today = new Date()


const timeDifference = ref(getTimeDifference());
let intervalId;

function getTimeDifference() {
    const diffInMs = today - new Date(props.timeAgo);
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInMinutes < 5) {
        return "justo ahora";
    } else if (diffInMinutes >= 15 && diffInMinutes < 60) {
        return `hace ${diffInMinutes} minutos`;
    } else if (diffInHours < 24) {
        return `hace ${diffInHours} horas`;
    } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `hace ${diffInDays} días`;
    }
}


onMounted(() => {
    intervalId = setInterval(() => {
        timeDifference.value = getTimeDifference();
    }, 1800000); 
});

onUnmounted(() => {
    clearInterval(intervalId);
});


function openModal() {
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}
</script>
