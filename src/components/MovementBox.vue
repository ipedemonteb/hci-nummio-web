<template>
    <div class="movement">
        <div class="movementContainer">
            <div class="iconInfoContainer">
                <v-icon
                    color="black"
                    size="48px"
                    :icon="isSent ? 'mdi-arrow-top-right-bold-box-outline' : 'mdi-arrow-bottom-left-bold-box-outline'"
                />
                <div class="actionContainer">
                    <h4>{{ isSent ? "Transferencia enviada" : "Transferencia recibida" }}</h4>
                    <h5>{{ isSent ? "A " : "De "}} {{ otherUser }}</h5>
                </div>
            </div>
            <div class="rightContainer">
                <div class="amountContainer">
                    <h3>$ {{ amount }}</h3>
                    <h5>{{ timeAgo.toLocaleDateString('en-GB') }}</h5>
                </div>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-btn class="detailsButton" prepend-icon="mdi-format-list-bulleted">Detalles</v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu>
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

    .amountContainer {
        margin-right: 5px;
    }

    .detailsButton {
        width: 100%;
    }

</style>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        otherUser: String,
        amount: Number,
        timeAgo: Date,
        isSent: Boolean
    });
</script>
