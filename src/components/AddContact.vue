<script setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['closeDialog']);
const invoiceCode = ref('');
const contactFound = ref(null);
const showSnackbar = ref(false);

const searchContact = () => {
  if (!invoiceCode.value) {
    contactFound.value = null;
    showSnackbar.value = true;
  } else if (invoiceCode.value === 'aliasEjemplo') {
    contactFound.value = { firstName: 'Fernando', lastName: 'Alonso' };
  } else {
    contactFound.value = false;
    showSnackbar.value = true;
  }
};

watch(invoiceCode, (newVal) => {
  if (!newVal) {
    contactFound.value = null;
  }
});
</script>

<template>
  <v-container class="addContact">
    <v-row>
      <div class="headerContainer mainTitle">
        <h2>Agregar Contacto:</h2>
        <v-icon class="closeIcon" @click="$emit('closeDialog')">mdi-close</v-icon>
      </div>
    </v-row>
    <v-row>
      <div class="input">
        <p class="text">Ingresá el Alias o CVU:</p>
        <v-text-field
          density="comfortable"
          variant="outlined"
          label="Alias o CVU"
          placeholder="Alias o CVU"
          v-model="invoiceCode"
          clearable
          append-icon="mdi-magnify"
          @click:append="searchContact"
          @keyup.enter="searchContact"
        />
      </div>
    </v-row>
    <v-row v-if="contactFound">
        <v-col cols="12" class="noPad">
            <p class="text">Usuario encontrado:</p>
            <v-text-field
                density="comfortable"
                variant="outlined"
                :value="`${contactFound.firstName} ${contactFound.lastName}`"
                readonly
            />
        </v-col>
    </v-row>
    <v-snackbar v-model="showSnackbar" color="red" timeout="3000">
      No se pudo encontrar el usuario
    </v-snackbar>
    <v-row class="buttonsRow">
      <v-col class="d-flex justify-center" cols="12">
        <v-btn variant="outlined" class="cancelButton mx-2" @click="$emit('closeDialog')">Cancelar</v-btn>
        <v-btn variant="outlined" class="confirmButton mx-2">Confirmar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.addContact {
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  max-height: 90vh;
  overflow-y: auto;
}

.headerContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.closeIcon {
  cursor: pointer;
  font-size: 30px;
}

.buttonsRow {
  margin-top: 30px !important;
  padding: 0px;
}

.confirmButton {
  border-radius: 20px;
  background-color: #5538EE;
  color: white;
  width: 35%;
}

.noPad {
  padding: 0px;
}

.input {
  width: 100%;
  margin-top: 20px;
}

.text {
  color: #6B4EFF;
  margin: 10px 0px;
}

.cancelButton {
  border-radius: 20px;
  background-color: white;
  color: #5538EE;
  width: 35%;
}

.contact-info {
  color: #333;
  font-size: 16px;
  margin-top: 10px;
}
</style>
