<script setup>
import { ref } from 'vue';

const email = ref('');
const code = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const visible = ref(false);

const emailValid = ref(null);
const codeValid = ref(null);
const isCodeFieldVisible = ref(false);
const isPasswordFieldsVisible = ref(false);

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailValid.value = emailPattern.test(email.value);
    if (emailValid.value) {
        isCodeFieldVisible.value = true;
    }
};

const validateCode = () => {
    codeValid.value = code.value === '123456';
    if (codeValid.value) {
        isPasswordFieldsVisible.value = true;
    }
};

const handlePasswordSignupInput = (value) => {
    newPassword.value = value;
};

const handleRepeatPasswordSignupInput = (value) => {
    confirmPassword.value = value;
};
</script>

<template>
    <div class="recover">
        <div class="leftContainer">
            <h1 class="nummioText">nummio</h1>
            <p class="virtualWalletText">Tu billetera virtual</p>
        </div>
        <div class="rightContainer">
            <h1 class="loginTitle">Recupero de Contraseña</h1>
            <div class="inputsContainer">
                <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>
                <v-text-field
                    class="input"
                    v-model="email"
                    placeholder="Direccion de correo electrónico"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    density="compact"
                    :error="emailValid === false"
                    :error-messages="emailValid === false ? 'Correo no válido' : ''"
                ></v-text-field>
                
                <div>
                    <v-text-field
                        v-if="isCodeFieldVisible"
                        class="input"
                        v-model="code"
                        placeholder="Ingresa el código enviado"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        density="compact"
                        :error="codeValid === false"
                        :error-messages="codeValid === false ? 'Código incorrecto' : ''"
                    ></v-text-field>
                    <p v-if="!isPasswordFieldsVisible && isCodeFieldVisible" class="reset">Reenviar Código</p>
                </div>

                <v-text-field
                    v-if="isPasswordFieldsVisible"
                    label="Contraseña"
                    placeholder="Contraseña"
                    @input="handlePasswordSignupInput"
                    prepend-inner-icon="mdi-lock-outline"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    variant="outlined"
                    density="compact"
                    @click:append-inner="visible = !visible"
                ></v-text-field>

                <v-text-field
                    v-if="isPasswordFieldsVisible"
                    label="Repetir Contraseña"
                    placeholder="Repetir contraseña"
                    @input="handleRepeatPasswordSignupInput"
                    prepend-inner-icon="mdi-lock-outline"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    variant="outlined"
                    density="compact"
                    @click:append-inner="visible = !visible"
                ></v-text-field>
            </div>
            <div class="buttonsContainer">
                <v-btn v-if="isPasswordFieldsVisible" variant="outlined" class="confirmBtn">Aceptar</v-btn>
                <v-btn v-if="!isCodeFieldVisible" variant="outlined" class="confirmBtn" @click="validateEmail">Aceptar</v-btn>
                <v-btn v-if="isCodeFieldVisible && !isPasswordFieldsVisible" variant="outlined" class="confirmBtn" @click="validateCode">Aceptar</v-btn>
                <v-btn variant="outlined" class="backBtn">Volver</v-btn>
            </div>
            <div class="socialIcons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <v-icon small class="socialIcon">mdi-twitter</v-icon>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <v-icon small class="socialIcon">mdi-facebook</v-icon>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <v-icon small class="socialIcon">mdi-instagram</v-icon>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.recover {
    display: flex;
    align-items: center;
    height: 100vh;
}
.leftContainer {
    background-color: #9990FF;
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.nummioText {
    font-size: 80px;
    color: white;
}
.virtualWalletText {
    font-size: 25px;
    color: white;
}
.rightContainer {
    width: 55%;
    padding: 0px 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.loginTitle {
    text-align: center;
    margin-bottom: 20px;
}
.inputsContainer {
    width: 100%;
    margin: 20px 0px;
    display: grid;
    gap: 8px;
}
.buttonsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.confirmBtn {
    border-radius: 20px;
    background-color: #5538EE;
    color: white;
    width: 70%;
}
.backBtn {
    border-radius: 20px;
    background-color: white;
    color: #5538EE;
    width: 70%;
}
.socialIcons {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 15px;
}
.socialIcon {
    color: #5538EE;
    cursor: pointer;
    text-decoration: none;
}
.reset {
    margin-top: 0px;
    color: #5538EE;
    cursor: pointer;
}
</style>
