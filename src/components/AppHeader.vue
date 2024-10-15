<template>
    <div class="header">
        <div class="headerContainer">
            <ProfileLogo/>

            <div class="logoContainer">
                <h1 class="text-primary">nummio</h1>
            </div>

            <div class="configurationContainer">
                <v-icon color="#6B4EFF" size="large" icon="mdi-cog"></v-icon>
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

    .logoContainer {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

</style>

<script setup>
    import ProfileLogo from './ProfileLogo.vue';

</script>
