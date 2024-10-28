<script setup>
import HelpComponent from '@/components/HelpComponent.vue';
import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
    <div class="contentContainer">
        <v-container fluid class="faq">
            <v-row justify="center" class="mb-5">
                <h1 class="mainTitle">FAQs: </h1>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
                    <SearchBar />
                </v-col>
            </v-row>
            <v-row>
                <v-container class="faqsContainer">
                    <HelpComponent question="¿Cómo restablezco mi contraseña?" answer="Puedes restablecer tu contraseña haciendo clic en el enlace ¿Olvidaste tu contraseña? en la página de inicio de sesión y siguiendo los pasos indicados. También puedes hacerlo desde la configuración de tu cuenta haciendo click en tu foto de perfi en la parte superior derecha." />  
                    <HelpComponent question="¿Cómo puedo actualizar mis datos personales?" answer="Para actualizar tus datos personales, accede a tu perfil desde la configuración de la cuenta y modifica la información que desees, en la parte superior derecha de la pantalla." />
                    <HelpComponent question="¿Qué métodos de pago hay disponibles?" answer="Todas las transacciones pueden ser llevadas a cabo utilizando tanto el saldo disponible en tu cuenta como las tarjetas que hayas vinculado previamente en la sección de Tarjetas" />
                    <HelpComponent question="¿Qué hago si no encuentro solución a mi problema?" answer="Podes comunicarte con el servicio de atención al cliente de nummio al 11 4321-1234 o enviar un mail a atencion@nummio.com.ar las 24hs del día."/>
                </v-container>
            </v-row>  
        </v-container>
    </div>
</template>

<style scoped>
    .faq {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        padding: 60px 100px;
        border-radius: 10px;
    }

    .faqsContainer {
        padding: 0px;
        margin: 0px;
    }
</style>
