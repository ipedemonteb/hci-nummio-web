<template>
    <v-container class="editContact">
        <v-row>
            <h1>Editar Contacto:</h1>
        </v-row>
        <v-row class="profilePictureRow" align-content="center">
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
                <v-text-field label="Nombre" variant="outlined"  clearable></v-text-field>
                <v-text-field label="Apellido" variant="outlined"  clearable></v-text-field>
                <v-text-field label="CBU/CVU" variant="outlined"  clearable></v-text-field>
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
        border: 3px solid #000;
        object-fit: cover;
    }
</style>

<script>
export default {
    emits: ['closeDialog']
};
</script>
