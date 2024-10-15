<template>
    <div class="frequentlyContact">
        <div class="freqContainer">
            <h2>Contactos Frecuentes:</h2>
            
            <div class="contactsContainer">
                <ContactBox />
                <ContactBox />
                <ContactBox />
            </div>

            <div class="buttonContainer">
                <v-btn variant="outlined" rounded="xl" class="button">
                     Ver Todos
                </v-btn>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .frequentlyContact {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .freqContainer {
        margin: 30px 40px;
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
        width: 200px;
    }

</style>

<script setup>
import ContactBox from './ContactBox.vue';


</script>