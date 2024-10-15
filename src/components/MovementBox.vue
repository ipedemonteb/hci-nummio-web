<template>
    <div class="movement">
        <div class="movementContainer">
            <div class="iconInfoContainer">
                <v-icon color="black" size="45px" icon="mdi-arrow-top-right-bold-box-outline" />
                <div class="actionContainer">
                    <h4>{{ action }}</h4>
                    <h5>Por {{ source }}</h5>
                </div>
            </div>
            <div class="amountContainer">
                <h3>$ {{ amount }}</h3>
                <h5>hace {{ timeAgo }}</h5>
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

    .actionContainer h5 {
        margin-top: 0px;
        color: grey;
    }
</style>

<script setup>
import { defineProps } from 'vue';
defineProps(['action', 'source', 'amount', 'timeAgo']);
</script>

