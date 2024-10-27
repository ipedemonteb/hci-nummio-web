<script setup>
import ProfileLogo from './ProfileLogo.vue';
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';

const usersStore = useUsersStore()
const {firstName, lastName, alias, cvu} = usersStore.getUserLoggedIn()
const copyAlias = ref(alias ? alias : "")
const name = `${firstName} ${lastName}`

const props = defineProps({
  closeModal: Function
});
const isEditingAlias = ref(false);
const copyMessage = ref('');
const aliasError = ref('');

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            copyMessage.value = 'Texto copiado al portapapeles';
            setTimeout(() => {
                copyMessage.value = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Error al copiar texto: ', err);
        });
};

const editAlias = () => {
    isEditingAlias.value = !isEditingAlias.value;
    if(!isEditingAlias.value)
      updateAlias()
};

const updateAlias = () => {
    if (copyAlias.value.length < 10) {
      aliasError.value = 'Alias inválido. Debe tener al menos 10 caracteres.'
      isEditingAlias.value = true
    } else if(!usersStore.updateAlias(copyAlias.value)) {
      isEditingAlias.value = true
      aliasError.value = 'Ya existe un usuario con ese alias'
    } else {
      aliasError.value = ''
    }
};

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        updateAlias();
    }
};
</script>

<template>
    <v-container class="infoContainer">
        <v-row>
            <div class="topContainer mainTitle">
                <h2 class="title">Datos Personales:</h2>
                <v-icon icon="mdi-close" class="icon" @click="props.closeModal"/>
            </div>
        </v-row>
        <v-row>
            <div class="profileContainer">
                <img src="/pfp.jpg" alt="Profil picture for user" class="profilePicture"/>
                <h4 class="profileName text-primary">{{ name }}</h4>
            </div>
        </v-row>
        <v-row>
            <div class="data">
                <p>Tu CVU:</p>
                <div class="dataContainer">
                    <div class="cvu">
                        <p>{{ cvu }}</p>
                    </div>
                    <v-icon icon="mdi-content-copy" class="copy" @click="copyToClipboard(cvu)"/>
                </div>
            </div>
        </v-row>
        <div class="data">
            <p>Tu alias:</p>
            <div class="dataContainer">
                <div class="cvu fixed-height">
                    <template v-if="isEditingAlias">
                        <input
                            v-model="copyAlias"
                            class="aliasInput"
                            @keydown="handleKeyDown"
                        />
                    </template>
                    <template v-else>
                        <p>{{ copyAlias ? copyAlias : "Sin definir"}}</p>
                    </template>
                </div>
                <v-icon icon="mdi-pencil-outline" class="copy" @click="editAlias" />
                <v-icon icon="mdi-content-copy" class="copy" @click="copyToClipboard(copyAlias)" />
            </div>
            <div v-if="aliasError" class="errorMessage">{{ aliasError }}</div>
        </div>
        <v-row>
            <v-col cols="12" class="d-flex justify-center align-center copyData">
                <p>Copiar todos mis datos</p>
            </v-col>
        </v-row>
    </v-container>
    <div v-if="copyMessage" class="notification">{{ copyMessage }}</div>
</template>

<style scoped>
    .title {
        font-size: 28px;
    }

    .infoContainer {
        width: 700px;
        min-height: 500px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 50px;
        color: #6B4EFF;
    }

    .topContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .infoCard {
      flex: 0 0 60%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.12);
      background-color: white;
      padding: 10px;
      margin-right: 10px;
      margin-left: 50px;
    }

    .icon {
        font-size: 30px;
    }

    .profileContainer {
        display: flex;
        align-items: center;
        margin: 20px 0px;
    }

    .profileName {
        margin-left: 20px;
        font-size: 24px;
    }

    .profilePicture {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid #6B4EFF;
        object-fit: cover;
    }

    .data {
        margin: 15px 0px;
        width: 100%;
        font-size: 18px;
    }

    .cvu {
        width: 100%;
        padding: 10px;
        border: 1px solid #000000;
        color: #7e7e7e;
        border-radius: 5px;
    }

    .dataContainer {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .copy {
        margin-left: 30px;
        color: #7e7e7e;
    }

    .fixed-height {
        height: 50px;
        display: flex;
        align-items: center;
    }

    .aliasInput {
        padding: 10px;
        border-radius: 5px;
        outline: none;
        width: 100%;
    }

    .aliasInput:focus {
        border-color: white;
    }

    .notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: green;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1000;
    }

    .errorMessage {
        color: red;
        margin-top: 5px;
        font-size: 15px;
    }

    .v-row, .v-col {
        margin: 0px;
    }

    .copyData {
        font-size: 18px;
        margin-top: 30px;
        cursor: pointer;
    }
</style>
