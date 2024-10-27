<template>
    <v-container class="confirmTransfer">
        <v-row>
            <h1>Realizar Transferencia:</h1>
        </v-row>
        <v-row>
            <v-container class="dataContainer">
                <div class="dataItem">
                    <h3>Destinatario:</h3>
                    <p>Fernando Alonso</p>
                </div>
                <div class="dataItem">
                    <h3>CVU:</h3>
                    <p>00000000000123456673</p>
                </div>
            </v-container>
        </v-row> 
        <v-row>
            <v-container class="amountContainer">
                <v-text-field 
                    v-model="inputValue" 
                    clearable
                    variant="outlined" 
                    label="Ingrese el monto"
                    class="input"
                >
                </v-text-field>
                <p>Saldo Disponible: $1.000,00</p>
            </v-container>
        </v-row>
        <v-row class="buttonsRow">
            <v-col class="d-flex justify-center" cols="12">
                <v-btn variant="outlined" class="cancelButton mx-2" @click="closeDialog">Cancelar</v-btn>
                <v-btn variant="outlined" class="confirmButton mx-2">Confirmar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .confirmTransfer {
        background-color: white;
        border-radius: 10px;
        padding: 50px;
    }

    .dataContainer {
        margin: 10px 0px;
        padding: 0px;
    }

    .dataItem {
        margin: 10px 0px;
        display: flex;
        align-items: center;
    }

    .dataItem h3 {
        margin-right: 6px;
    }

    .dataItem p {
        font-size: 17px;
    }

    .amountContainer {
        margin: 10px 0px;
        padding: 0px;
    }

    .buttonsRow {
        margin-top: 30px !important; 
        padding: 0px;
    }

    .confirmButton {
        border-radius: 20px;
        background-color: #5538EE;
        color: white;
        width: 35%;
    }

    .cancelButton {
        border-radius: 20px;
        background-color: white;
        color: #5538EE;
        width: 35%;
    }
</style>

<script>
export default {
    props: {
        closeDialog: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            inputValue: ''
        };
    }
};
</script>
