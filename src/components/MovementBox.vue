<template>
    <div class="movement">
        <div class="movementContainer">
            <div class="iconInfoContainer">
                <v-icon 
                    color="black" 
                    size="45px" 
                    :icon="isSent ? 'mdi-arrow-top-right-bold-box-outline' : 'mdi-arrow-bottom-left-bold-box-outline'" 
                />
                <div class="actionContainer">
                    <h4>{{ action }}</h4>
                    <h5>Por {{ source }}</h5>
                </div>
            </div>
            <div class="rightContainer">
                <div class="amountContainer">
                    <h3>$ {{ amount }}</h3>
                    <h5>hace {{ timeAgo }}</h5>
                </div>
                <v-icon class="moreOptions" color="black" size="large" icon="mdi-dots-vertical"/> 
            </div>   
        </div>

    </div>
</template>

<style scoped>
    .movement {
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 5px 0px;
    }

    .movementContainer {
        margin: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .iconInfoContainer {
        display: flex;
        align-items: center;
    }

    .rightContainer {
        display: flex;
        align-items: center;
    }

    .moreOptions {
        margin-left: 10px;
    }

    .actionContainer h5 {
        margin-top: 0px;
        color: grey;
    }
</style>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        action: String,
        source: String,
        amount: String,
        timeAgo: String,
        isSent: Boolean
    });
</script>

