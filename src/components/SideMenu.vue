<template>
    <div class="sideMenu">
        <div class="menuContainer">
            <div class="multOptionContainer">
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-home"/>
                    <RouterLink to="/"><h3 class="optionText">Inicio</h3></RouterLink>
                </div>
            </div>
            <v-divider />
            <div class="multOptionContainer">
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-arrow-right-circle-outline"/>
                    <RouterLink to="/transferir"><h3 class="optionText">Transferir</h3></RouterLink>
                </div>
                <div class="optionContainer" @click="showInfoPopup=true">
                    <v-icon color="black" size="large" icon="mdi-card-account-details-outline"/>
                    <h3 class="optionText">Mis Datos</h3>
                    <InfoPopUp :showInfoPopup="showInfoPopup" @update:showInfoPopup="showInfoPopup = $event" />
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-history"/>
                    <RouterLink to="/movimientos"><h3 class="optionText">Movimientos</h3></RouterLink>
                </div>
            </div>
            <v-divider />
            <div class="multOptionContainer">
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-credit-card-outline"/>
                    <h3 class="optionText">Tus Tarjetas</h3>
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-account-credit-card-outline"/>
                    <h3 class="optionText">Pagar</h3>
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-cash-multiple"/>
                    <h3 class="optionText">Retirar</h3>
                </div>
            </div>
            <v-divider />
            <div class="multOptionContainer">
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-finance"/>
                    <h3 class="optionText">Inversiones</h3>
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-file-document-outline"/>
                    <h3 class="optionText">Pago de Servicios</h3>
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-sale"/>
                    <h3 class="optionText">Beneficios</h3>
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-account-multiple-outline"/>
                    <h3 class="optionText">Contactos</h3>
                </div>
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-plus"/>
                    <h3 class="optionText">Ayuda</h3>
                </div>
                <v-divider />
                <div class="multOptionContainer">
                <div class="optionContainer">
                    <v-icon color="black" size="large" icon="mdi-logout"/>
                    <h3 class="optionText">Cerrar Sesión</h3>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sideMenu {
        position: relative;
        background-color: #E7E7FF;
        width: 15%;
        height: 100%;
        overflow-y: auto;
        z-index: 999;
    }
    .menuContainer {
        margin: 20px 30px;
    }

    .multOptionContainer {
        margin: 30px 0px;
    }

    .optionContainer {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }

    .optionText {
        margin-left: 7px;
    }

</style>

<script setup>
    import { ref } from 'vue';
    import InfoPopUp from './InfoPopUp.vue';

    const showInfoPopup = ref(false);
</script>
