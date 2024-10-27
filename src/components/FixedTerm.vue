<script setup>

</script>

<template>
    <div class="fixedTerm">
        <div class="topContainer">
            <h2 class="mainTitle">Plazos Fijos:</h2>
        </div>
        <div class="fixedTermContainer">
            <v-container class="dataContainer">
                <v-row>
                    <v-col cols="6">
                        <div class="topData">
                            <h3>Monto Invertido: </h3>
                            <p> $1.230.000,00 </p>
                        </div>
                        <div>
                            <h3>Monto Actual: </h3>
                            <p> $1.540.000,00 </p>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div class="topData">
                            <h3>Rendimiento: </h3>
                            <p>+2.31%</p>
                        </div>
                        <div>
                            <h3>Próximo Vencimiento: </h3>
                            <p> 08/10/2024 </p>
                        </div> 
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="buttonContainer">
                        <v-btn text="Nuevo Plazo Fijo" variant="outlined" class="button"/>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style scoped>
.fixedTerm {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px 40px;
    flex: 1;
}

.topContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.amount {
    display: flex;
    align-items: center;
}

.dataContainer {
    padding: 0px;
    margin: 15px 0px;
}

.topData {
    margin-bottom: 15px;
}

.buttonContainer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}


.button {
    margin: 10px 0px;
    border-radius: 40px;
    background-color: white;
    color: #5538EE;
    width: 200px;
}

</style>