<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>

<template>
    <div class="login">
        <div class="leftContainer">
            <h1 class="nummioText">nummio</h1>
            <p class="virtualWalletText">Tu billetera virtual</p>
        </div>
        <div class="rightContainer">
            <h1 class="loginTitle">Inicio de Sesión</h1>
            <div class="inputsContainer">
                <div>
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>
                    <v-text-field
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                    ></v-text-field>
                </div>
                <div>
                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password
                        <a
                            class="forgotPassword text-decoration-none"
                            href="#"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Forgot login password?
                        </a>
                    </div>

                    <v-text-field
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        @click:append-inner="visible = !visible"
                    ></v-text-field>
                </div>
            </div>

            <div class="buttonsContainer">
                <v-btn class="loginBtn" size="large">Iniciar Sesión</v-btn>
                <v-btn class="registerBtn" size="large">Registrarse</v-btn>
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
        color:#5538EE;
    }

    .loginBtn {
        border-radius: 20px;
        background-color: #5538EE;
        color: white;
        width: 70%;
    }

    .registerBtn {
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
