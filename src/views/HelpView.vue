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
                    <HelpComponent question="¿Cómo inicio Sesión?" answer="Para iniciar sesión, debes ingresar tu correo electrónico y contraseña en la página de inicio de sesión. Si no tienes una cuenta, puedes registrarte en la página de registro." />
                    <HelpComponent question="¿Cómo restablezco mi contraseña?" answer="Puedes restablecer tu contraseña haciendo clic en el enlace ¿Olvidaste tu contraseña? en la página de inicio de sesión y siguiendo los pasos indicados." />  
                    <HelpComponent question="¿Cómo puedo actualizar mis datos personales?" answer="Para actualizar tus datos personales, accede a tu perfil desde la configuración de la cuenta y modifica la información que desees." />
                    <HelpComponent question="¿Cómo elimino mi cuenta?" answer="Si deseas eliminar tu cuenta, ve a la sección de configuración de tu perfil y selecciona la opción Eliminar cuenta. Ten en cuenta que esta acción es irreversible." />  
                    <HelpComponent question="¿Qué métodos de pago aceptan?" answer="Aceptamos pagos con tarjetas de crédito, débito, y transferencias bancarias a través de nuestra plataforma segura de pagos." />
                    <HelpComponent question="¿Puedo cambiar mi plan de suscripción?" answer="Sí, puedes cambiar tu plan de suscripción en cualquier momento desde la configuración de tu cuenta, eligiendo la opción que mejor se adapte a tus necesidades." />
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
