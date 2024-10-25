<template>
    <div class="sideMenu">
        <div class="multOptionContainer">
            <RouterLink to="/" class="optionContainer">
                    <v-icon size="large" icon="mdi-home"/>
                    <h3 class="optionText">Inicio</h3>
            </RouterLink>
        </div>
        <v-divider class="customDivider" :thickness="2"/>
        <div class="multOptionContainer">
            <RouterLink to="/transferir" class="optionContainer">
                <v-icon size="large" icon="mdi-arrow-right-circle-outline"/>
                <h3 class="optionText">Transferir</h3>
            </RouterLink>
            <div class="optionContainer" @click="showInfoPopup=true">
                <v-icon size="large" icon="mdi-card-account-details-outline"/>
                <h3 class="optionText">Mis Datos</h3>
                <InfoPopUp :showInfoPopup="showInfoPopup" @update:showInfoPopup="showInfoPopup = $event" />
            </div>
            <RouterLink to="/movimientos" class="optionContainer">
                <v-icon size="large" icon="mdi-history"/>
                <h3 class="optionText">Movimientos</h3>
            </RouterLink>
        </div>
        <v-divider class="customDivider" :thickness="2"/>
        <div class="multOptionContainer">
            <RouterLink to="/billetera" class="optionContainer">
                <v-icon size="large" icon="mdi-credit-card-outline"/>
                <h3 class="optionText">Tus Tarjetas</h3>
            </RouterLink>
            <RouterLink to="/" class="optionContainer">
                <v-icon size="large" icon="mdi-account-credit-card-outline"/>
                <h3 class="optionText">Recibir Pago</h3>
            </RouterLink>
            <RouterLink to="/inversiones" class="optionContainer">
                <v-icon size="large" icon="mdi-finance"/>
                <h3 class="optionText">Inversiones</h3>
            </RouterLink>
        </div>
        <v-divider class="customDivider" :thickness="2"/>
        <div class="multOptionContainer">
            <RouterLink to="/" class="optionContainer">
                <v-icon size="large" icon="mdi-file-document-outline"/>
                <h3 class="optionText">Pago de Servicios</h3>
            </RouterLink>
            <RouterLink to="/" class="optionContainer">
                <v-icon size="large" icon="mdi-sale"/>
                <h3 class="optionText">Beneficios</h3>
            </RouterLink>
            <RouterLink to="/contactos" class="optionContainer">
                <v-icon size="large" icon="mdi-account-multiple-outline"/>
                <h3 class="optionText">Contactos</h3>
            </RouterLink>
            <RouterLink to="/ayuda" class="optionContainer">
                <v-icon size="large" icon="mdi-plus"/>
                <h3 class="optionText">Ayuda</h3>
            </RouterLink>
        </div>
        <v-divider class="customDivider" :thickness="2"/>
        <div class="multOptionContainer">
            <RouterLink to="/" class="optionContainer">
                <v-icon size="large" icon="mdi-logout"/>
                <h3 class="optionText">Cerrar Sesión</h3>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .sideMenu {
        padding: 20px 30px;
        position: relative;
        background-color: #C6C4FF;
        color: black;
        width: 15%;
        height: 100%;
        overflow-y: auto;
        z-index: 999;
    }

    .multOptionContainer {
        margin: 30px 0px;
    }

    .optionContainer {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    .optionText {
        margin-left: 7px;
    }

    .customDivider {
        color: black;
    }

</style>

<script setup>
    import { ref } from 'vue';
    import InfoPopUp from './InfoPopUp.vue';

    const showInfoPopup = ref(false);
</script>
