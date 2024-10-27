<template>
    <div class="contactBox">
        <div class="contactBoxContainer">
            <div class="iconInfoContainer">
                <img src="/pfp.jpg" alt="Profile picture for user" class="profilePicture"/>
                <div class="iconInfo">
                    <h4>{{ name }}</h4>
                    <h5>Cuenta nummio</h5>
                </div>
            </div>

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-btn class="deleteButton" prepend-icon="mdi-delete-outline">Eliminar</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>

<style scoped>
    .contactBox {
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 5px 0px;
    }

    .contactBoxContainer {
        margin: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .profilePicture {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 3px solid #000;
        object-fit: cover;
    }
    .iconInfoContainer {
        display: flex;
        align-items: center;
    }
    .iconInfo {
        margin-left: 10px;
    }
    .iconInfo h5 {
        margin-top: 0px;
        color: grey;
    }
    .editButton {
        width: 100%;
    }
    .deleteButton {
        width: 100%;
        color: red;
    }
</style>

<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
  name: String,
})

const isEditDialogVisible = ref(false);

const openEditDialog = () => {
    isEditDialogVisible.value = true;
};

const closeEditDialog = () => {
    isEditDialogVisible.value = false;
};

</script>
