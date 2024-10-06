<template>
    <div class="header">
        <div class="headerContainer">
            <div class="profileContainer">
                <img src="/pfp.jpg" alt="Profil picture for user" class="profilePicture"/>
                <h3 class="profileName">Fernando Alonso</h3>
            </div>
            
            <div class="logoContainer">
                <h1>nummio</h1>
            </div>

            <div class="configurationContainer">
                <v-icon color="black" size="large" icon="mdi-cog"></v-icon>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: white;
        position: fixed;
        z-index: 1000;
    }

    .headerContainer {
        margin: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .profileContainer{
        display: flex;
        align-items: center;
    }

    .profilePicture {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid #000;
        object-fit: cover;
    }

    .profileName {
        margin-left: 5px;
    }

    .logoContainer {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

</style>

<script setup>

</script>