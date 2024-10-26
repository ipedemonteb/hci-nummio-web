<template>
    <v-container class="editContact">
        <v-row>
            <div class="headerContainer">
                <h1>Editar Datos:</h1>
                <v-icon class="closeIcon" @click="$emit('closeDialog')">mdi-close</v-icon>
            </div>
        </v-row>
        <v-row align-content="center">
            <v-container>
                <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                        <v-avatar size="100">
                            <img src="/pfp.jpg" alt="Profile picture for user" class="profilePicture"/>
                        </v-avatar>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                        <v-file-input
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
        <v-row>
            <v-container>
                <h2 class="title">Datos de la Cuenta:</h2>
                <v-text-field label="Nombre" variant="outlined" clearable></v-text-field>
                <v-text-field label="Apellido" variant="outlined" clearable></v-text-field>
                <v-text-field label="Alias" variant="outlined" clearable></v-text-field>
                <h2 class="title">Cambiar Contraseña:</h2>
                <v-text-field
                    v-model="newPassword"
                    :type="showPassword ? 'text' : 'password'"
                    label="Nueva Contraseña"
                    variant="outlined"
                    clearable
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="togglePasswordVisibility('new')"
                ></v-text-field>
                <v-text-field
                    v-model="repeatPassword"
                    :type="showRepeatPassword ? 'text' : 'password'"
                    label="Repetir Contraseña"
                    variant="outlined"
                    clearable
                    :append-icon="showRepeatPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="togglePasswordVisibility('repeat')"
                ></v-text-field>
            </v-container>
        </v-row>
        <v-row class="buttonsRow">
            <v-col class="d-flex justify-center" cols="12">
                <v-btn class="cancelButton mx-2" @click="$emit('closeDialog')">Cancelar</v-btn>
                <v-btn class="confirmButton mx-2" append-icon="mdi-arrow-right">Confirmar</v-btn>
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
    color: #5538EE;
}

.closeIcon {
    cursor: pointer;
    font-size: 35px;
}
</style>

<script>
export default {
    emits: ['closeDialog'],
    data() {
        return {
            newPassword: '',
            repeatPassword: '',
            showPassword: false,
            showRepeatPassword: false,
        };
    },
    methods: {
        togglePasswordVisibility(type) {
            if (type === 'new') {
                this.showPassword = !this.showPassword;
            } else if (type === 'repeat') {
                this.showRepeatPassword = !this.showRepeatPassword;
            }
        }
    }
};
</script>
