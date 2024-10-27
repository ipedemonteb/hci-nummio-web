<template>
    <div class="frequentlyContact">
        <h2 class="mainTitle">Contactos Frecuentes:</h2>

        <div class="contactsContainer">
            <ContactBox
                v-for="contact in freqContacts"
                :key="contact.id"
                :name="contact.name"
            />
        </div>

        <div class="buttonContainer">
            <v-btn variant="outlined" rounded="xl" class="button" @click="goToPage">
                    Ver Más
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
    .frequentlyContact {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
    }

    .contactsContainer {
        display: flex;
        flex-direction: column;
        margin: 20px 0px;
    }

    .buttonContainer {
        display: flex;
        justify-content: center;
        margin: 30px 0px;
    }

    .button {
        border-radius: 40px;
        background-color: white;
        color: #5538EE;
        width: 200px;
    }

</style>

<script setup>
import { useContactsStore } from '@/stores/contacts';
import ContactBox from './ContactBox.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter()

const goToPage = () => {
  router.push('/contactos')
}

const contactsStore = useContactsStore()
const freqContacts = computed(() => contactsStore.getFrequentlyContacts(3))

</script>
