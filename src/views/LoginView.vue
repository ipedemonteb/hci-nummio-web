<template>
  <div class="login">
    <div class="leftContainer">
      <h1 class="nummioText">nummio</h1>
      <p class="virtualWalletText">Tu billetera virtual</p>
    </div>
    <div class="rightContainer">
      <h1 class="loginTitle">{{ isRegistering ? "Registrate" : "Inicio de sesión" }}</h1>
      <div class="inputsContainer">
        <template v-if="!isRegistering">
          <div>
            <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>
            <v-text-field
              @input="handleEmailInput"
              class="input"
              placeholder="Direccion de correo electrónico"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
            ></v-text-field>
          </div>
          <div>
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              Contraseña
              <a
                class="forgotPassword text-decoration-none"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
              ¿Olvidaste tu contraseña?
              </a>
            </div>
            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              @input="handlePasswordInput"
              placeholder="Contraseña"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
            ></v-text-field>
          </div>
        </template>

        <template v-else>
          <v-text-field
            label="Nombre"
            @input="handleFirstNameSignupInput"
            placeholder="Tu nombre"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            label="Apellido"
            @input="handleLastNameSignupInput"
            placeholder="Tu apellido"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            label="Email"
            @input="handleEmailSignupInput"
            placeholder="Tu correo"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            label="Contraseña"
            placeholder="Contraseña"
            @input="handlePasswordSignupInput"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-text-field
            label="Repetir Contraseña"
            placeholder="Repetir contraseña"
            @input="handleRepeatPasswordSignupInput"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
        </template>
      </div>

      <div class="buttonsContainer">
        <template v-if="!isRegistering">
          <v-btn class="loginBtn" size="large" @click="loginHandler()">Iniciar Sesión</v-btn>
          <v-btn class="registerBtn" size="large" @click="isRegistering = true">Registrarse</v-btn>
        </template>

        <template v-else>
          <v-btn class="confirmBtn" size="large" @click="signupHandler()">Confirmar</v-btn>
          <v-btn class="accountBtn" size="large" @click="isRegistering = false">Ya tengo cuenta</v-btn>
        </template>
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

<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';

const usersStore = useUsersStore()
var visible = false
var isRegistering = ref(false)

const email = ref("")
const password = ref("")

const firstName = ref("")
const lastName = ref("")
const emailSignup = ref("")
const passwordSignup = ref("")
const repeatPasswordSignup = ref("")

const handleEmailInput = (event) => {
  email.value = event.target.value
}

const handlePasswordInput = (event) => {
  password.value = event.target.value
}

const loginHandler = () => {
  const user = usersStore.login({email: email.value, password: password.value})
}

const handleFirstNameSignupInput = (event) => {
  firstName.value = event.target.value
}

const handleLastNameSignupInput = (event) => {
  lastName.value = event.target.value
}

const handleEmailSignupInput = (event) => {
  emailSignup.value = event.target.value
}

const handlePasswordSignupInput = (event) => {
  passwordSignup.value = event.target.value
}

const handleRepeatPasswordSignupInput = (event) => {
  repeatPasswordSignup.value = event.target.value
}

const signupHandler = () => {
  const user = usersStore.signup({
    firstName: firstName.value,
    lastName: lastName.value,
    email: emailSignup.value,
    password: passwordSignup.value,
    repeatPassword: repeatPasswordSignup.value
  })
}

</script>

<style scoped>
    .login {
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

    .forgotPassword {
        font-size: 16px;
        color: #5538EE;
    }

    .loginBtn, .confirmBtn {
        border-radius: 20px;
        background-color: #5538EE;
        color: white;
        width: 70%;
    }

    .registerBtn, .accountBtn {
        border-radius: 20px;
        background-color: #E7E7FF;
        color: black;
        width: 70%;
    }

    .socialIcons {
        display: flex;
        justify-content: center;
        margin: 60px 0px;
        gap: 15px;
    }

    .socialIcon {
        color: #5538EE;
        cursor: pointer;
        text-decoration: none;
    }
</style>
