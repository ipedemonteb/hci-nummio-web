<template>
    <div class="contactBox">
        <div class="contactBoxContainer">
            <div class="iconInfoContainer">
                <img src="/pfp.jpg" alt="Profil picture for user" class="profilePicture"/>
                <div class="iconInfo">
                    <h4>Franco Colapinto</h4>
                    <h5>Cuenta Galicia</h5>
                </div>
            </div> 
            <v-icon color="black" size="large" icon="mdi-dots-vertical"/>      
        </div>
    </div>

</template>

<style scoped>
    .contactBox {
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 5px 0px;
    }
    
    .contactBoxContainer {
        margin: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .profilePicture {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 3px solid #000;
        object-fit: cover;
    }

    .iconInfoContainer {
        display: flex;
        align-items: center;
    }

    .iconInfo {
        margin-left: 10px;
    }

    .iconInfo h5 {
        margin-top: 0px;
        color: grey;
    }

</style>

<script setup>

</script>