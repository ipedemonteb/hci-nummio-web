<template>
  <v-dialog :model-value="showInfoPopup" max-width="400px" transition="dialog-bottom-transition" @update:model-value="updateShowPopup">
    <v-card class="popup-card">
      <v-card-title class="text-h5">
        Mis Datos
      </v-card-title>
      <v-card-text>
        Aquí puedes ver tus datos (próximamente)
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          Cerrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>

    const props = defineProps({
        showInfoPopup: {
            type: Boolean,
            required: true,
        },
    });

    // Define the emit function
    const emit = defineEmits();

    // Function to close the dialog
    const closeDialog = () => {
        emit('update:showInfoPopup', false); // Emitir evento para cerrar el diálogo
    };

    // Update the showPopup value when the dialog closes
    const updateShowPopup = (value) => {
        emit('update:showInfoPopup', value);
    };
</script>

<style scoped>
.popup-card {
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: white;
}

.v-card__title {
  color: rgba(0, 0, 0, 0.87);
}

.v-card__text {
  color: rgba(0, 0, 0, 0.6);
}
</style>
