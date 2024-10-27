<template>
    <v-container class="editContact">
        <v-row>
            <div class="headerContainer mainTitle">
                <h2>Editar Datos:</h2>
                <v-icon class="closeIcon" @click="$emit('closeDialog')">mdi-close</v-icon>
            </div>
        </v-row>
        <v-row align-content="center" class="profileImg">
            <v-container>
                <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                        <v-avatar size="100">
                            <img :src="user.profileImage" alt="Profile picture for user" class="profilePicture"/>
                        </v-avatar>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                        <v-file-input
                            v-model="newProfileImage"
                            density="compact"
                            :rules="rules"
                            accept="image/png, image/jpeg, image/bmp"
                            label="Avatar"
                            placeholder="Subir imagen"
                            variant="outlined"
                            prepend-icon="mdi-camera"
                            class="imageInput"
                        ></v-file-input>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <v-row class="noMarginTop">
            <v-container>
                <h3 class="title">Datos de la Cuenta:</h3>
                <v-text-field density="compact" :label="user.firstName" variant="outlined" clearable v-model="newFirstName"></v-text-field>
                <v-text-field density="compact" :label="user.lastName" variant="outlined" clearable v-model="newLastName"></v-text-field>
                <v-text-field density="compact" :label="user.alias" variant="outlined" clearable v-model="newAlias"></v-text-field>
                <h3 class="title">Cambiar Contraseña:</h3>
                <v-text-field
                    density="compact"
                    v-model="newPassword"
                    :type="showPassword ? 'text' : 'password'"
                    label="Nueva Contraseña"
                    variant="outlined"
                    clearable
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="togglePasswordVisibility('new')"
                ></v-text-field>
                <v-text-field
                    density="compact"
                    v-model="repeatPassword"
                    :type="showRepeatPassword ? 'text' : 'password'"
                    label="Repetir Contraseña"
                    variant="outlined"
                    clearable
                    :append-icon="showRepeatPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="togglePasswordVisibility('repeat')"
                ></v-text-field>
            </v-container>
            <v-snackbar v-model="snackbar" :timeout="3000" color="error">Las contraseñas no coinciden</v-snackbar>
        </v-row>
        <v-row class="buttonsRow">
            <v-col class="d-flex justify-center" cols="12">
                <v-btn variant="outlined" class="cancelButton mx-2" @click="$emit('closeDialog')">Cancelar</v-btn>
                <v-btn variant="outlined" class="confirmButton mx-2" @click="handleConfirm">Confirmar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.editContact {
    background-color: white;
    border-radius: 10px;
    padding: 50px;
    max-height: 90vh;
    overflow-y: auto;
}

.imageInput {
    max-width: 60%;
}

.buttonsRow {
    margin-top: 30px !important; 
    padding: 0px;
}

.profileImg {
    margin-top: 30px;
}

.confirmButton {
    border-radius: 20px;
    background-color: #5538EE;
    color: white;
    width: 35%;
}

.cancelButton {
    border-radius: 20px;
    background-color: white;
    color: #5538EE;
    width: 35%;
}

.noMarginTop {
    margin-top: 0px !important;
}

.profilePicture {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid #5538EE;
    object-fit: cover;
}

.title {
    margin: 20px 0px;
    color:#5538EE;
}

.headerContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #39288E;
}

.closeIcon {
    cursor: pointer;
    font-size: 30px;
}
</style>

<script setup>
import { ref } from 'vue';
import { useUsersStore } from '@/stores/users';

const usersStore = useUsersStore();
const emits = defineEmits(['closeDialog']);

const user = usersStore.getUserLoggedIn();
const newFirstName = ref('');
const newLastName = ref('');
const newAlias = ref('');
const newProfileImage = ref();
const snackbar = ref(false);
const newPassword = ref('');
const repeatPassword = ref('');
const showPassword = ref(false);
const showRepeatPassword = ref(false);

function togglePasswordVisibility(type) {
    if (type === 'new') {
        showPassword.value = !showPassword.value;
    } else if (type === 'repeat') {
        showRepeatPassword.value = !showRepeatPassword.value;
    }
}

function handleConfirm() {
    if ((newPassword.value || repeatPassword.value) && newPassword.value !== repeatPassword.value) {
        snackbar.value = true;
        return;
    }
    snackbar.value = false;
    console.log(newProfileImage.value)
    if (newAlias.value)
        usersStore.updateAlias(newAlias.value);
    usersStore.updateUser(
        newFirstName.value || user.firstName,
        newLastName.value || user.lastName,
        newPassword.value || user.password,
        user.profileImage
    ); 
    emits('closeDialog');
}
</script>
