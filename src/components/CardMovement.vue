<template>
    <div class="movement">
        <div class="movementContainer">
            <div class="iconInfoContainer">
                <v-icon color="#6B4EFF" class="icon" size="40px" icon="mdi-cash-multiple" />
                <div class="actionContainer">
                    <h4>Pago Realizado</h4>
                    <h5>Tarjeta {{ source }}</h5>
                </div>
            </div>
            <div class="rightContainer">
                <div class="amountContainer">
                    <h4>$ {{ amount }}</h4>
                    <h5>hace {{ timeAgo }}</h5>
                </div>
                <!-- <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-btn class="detailsButton" prepend-icon="mdi-format-list-bulleted">Detalles</v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu> -->
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

    .icon {
        margin-right: 8px;
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

    .amountContainer {
        margin-right: 5px;
    }

    .detailsButton {
        width: 100%;
    }

</style>

<script setup>
    import { defineProps } from 'vue';
    defineProps(['action', 'source', 'amount', 'timeAgo']);
</script>

