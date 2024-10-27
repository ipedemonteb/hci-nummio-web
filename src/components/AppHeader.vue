<template>
    <div class="header">
        <div class="headerContainer">
            
            <div class="logoContainer">  
                <RouterLink to="/" class="optionContainer">
                    <h1 class="text-primary">nummio</h1>
                </RouterLink>
            </div>

            <div class="profileContainer" @click="openEditDialog">
                <ProfileLogo/>
            </div>
            <!-- <div class="configurationContainer">
                <v-icon color="#6B4EFF" size="large" icon="mdi-cog" @click="openEditDialog"></v-icon>
            </div> -->

            <v-dialog v-model="isEditDialogVisible" max-width="700">
                <EditData @closeDialog="closeEditDialog" />
            </v-dialog>

        </div>
    </div>
</template>

<style scoped>
.header {
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: fixed;
    z-index: 1000;
    padding: 30px 50px 30px 0px;
}

.headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* .logoContainer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
} */

.logoContainer {
    width: 17%;
    display: flex;
    justify-content: center;
}

.profileContainer {
    cursor: pointer;
}

.optionContainer {
    text-decoration: none;
}

</style>

<script setup>
import ProfileLogo from './ProfileLogo.vue';
import EditData from './EditData.vue';
import { ref } from 'vue';

const isEditDialogVisible = ref(false);

const openEditDialog = () => {
    isEditDialogVisible.value = true;
};

const closeEditDialog = () => {
    isEditDialogVisible.value = false;
};

</script>
