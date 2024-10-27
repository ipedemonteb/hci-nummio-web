<template>
  <div class="login">
    <div class="leftContainer">
      <h1 class="nummioText">nummio</h1>
      <p class="virtualWalletText">Tu billetera virtual</p>
    </div>
    <div class="rightContainer">
      <h1 class="loginTitle">{{ isRegistering ? "Registrarse" : "Inicio de sesión" }}</h1>
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
              density="compact"
            ></v-text-field>
          </div>
          <div>
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              Contraseña
              <a
                class="forgotPassword text-decoration-none"
                href="/"
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
              density="compact"
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
            density="compact"
          ></v-text-field>

          <v-text-field
            label="Apellido"
            @input="handleLastNameSignupInput"
            placeholder="Tu apellido"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
            density="compact"
          ></v-text-field>

          <v-text-field
            label="Email"
            @input="handleEmailSignupInput"
            placeholder="Tu correo"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            density="compact"
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
            density="compact"
          ></v-text-field>

          <v-text-field
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
        </template>
        <v-snackbar v-model="snackbar" :timeout="3000" color="error">{{ snackbarMessage }}</v-snackbar>
      </div>

      <div class="buttonsContainer">
        <template v-if="!isRegistering">
          <v-btn variant="outlined" class="loginBtn" @click="loginHandler()">Iniciar Sesión</v-btn>
          <v-btn variant="outlined" class="registerBtn" @click="isRegistering = true">Registrarse</v-btn>
        </template>

        <template v-else>
          <v-btn variant="outlined" class="confirmBtn" @click="signupHandler()">Confirmar</v-btn>
          <v-btn variant="outlined" class="accountBtn" @click="isRegistering = false">Ya tengo cuenta</v-btn>
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

const isEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return email != null && emailPattern.test(email)
}

const loginHandler = () => {
  if(!isEmail(email.value)) {
    snackbar.value = true
    snackbarMessage.value = "Debe ingresar un correo electrónico válido"
    return
  }
  if(!password.value || password.value.trim() === "") {
    snackbar.value = true
    snackbarMessage.value = "Debe ingresar una contraseña"
    return
  }
  const user = usersStore.login({email: email.value, password: password.value})
  if(user == null) {
    snackbar.value = true
    snackbarMessage.value = "Correo electrónico y/o contraseña incorrectos"
  } else {
    snackbar.value = false
    snackbarMessage.value = ""
  }
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
  if(!firstName.value || firstName.value.trim() === "") {
    snackbar.value = true
    snackbarMessage.value = "Debe ingresar un nombre"
    return
  }
  if(!lastName.value || lastName.value.trim() === "") {
    snackbar.value = true
    snackbarMessage.value = "Debe ingresar un apellido"
    return
  }
  if(!isEmail(emailSignup.value)) {
    snackbar.value = true
    snackbarMessage.value = "Debe ingresar un correo electrónico válido"
    return
  }
  if(!passwordSignup.value || passwordSignup.value.trim() === "") {
    snackbar.value = true
    snackbarMessage.value = "Debe ingresar una contraseña"
    return
  }
  if(passwordSignup.value !== repeatPasswordSignup.value) {
    snackbar.value = true
    snackbarMessage.value = "Las contraseñas no coinciden"
    return
  }
  const user = usersStore.signup({
    firstName: firstName.value,
    lastName: lastName.value,
    email: emailSignup.value,
    password: passwordSignup.value,
    repeatPassword: repeatPasswordSignup.value
  })
  if(user == null) {
    snackbar.value = true
    snackbarMessage.value = "Ya existe un usuario con ese correo electrónico"
    return
  }
  snackbar.value = false
  snackbarMessage.value = ""
}

const snackbar = ref(false)
const snackbarMessage = ref("")

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
</style>
