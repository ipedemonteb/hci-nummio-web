<script setup lang="ts">
import StockBox from './StockBox.vue';
</script>

<template>
    <div class="holdings">
        <h2 class="mainTitle">Mercado de Capitales:</h2>
        <div class="stocks">
            <StockBox name="Apple Inc." symbol="AAPL" :price="123.45" :change="1.23"/>
            <StockBox name="Tesla" symbol="TSLA" :price="678.90" :change="-0.56"/>
            <StockBox name="Amazon" symbol="AMZN" :price="3210.87" :change="2.15"/>
            <StockBox name="Microsoft" symbol="MSFT" :price="299.99" :change="0.78"/>
            <StockBox name="Google" symbol="GOOGL" :price="2735.12" :change="-1.34"/>
            <StockBox name="Facebook" symbol="FB" :price="352.61" :change="0.45"/>
            <StockBox name="Netflix" symbol="NFLX" :price="540.73" :change="-0.67"/>
            <StockBox name="Nvidia" symbol="NVDA" :price="765.50" :change="1.88"/>
            <StockBox name="Adobe" symbol="ADBE" :price="560.12" :change="0.56"/>
            <StockBox name="Intel" symbol="INTC" :price="53.45" :change="-0.23"/>
            <StockBox name="Twitter" symbol="TWTR" :price="65.14" :change="0.99"/>
            <StockBox name="Alibaba" symbol="BABA" :price="199.87" :change="-1.12"/>
        </div>
    </div>
</template>

<style scoped>
    .holdings {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
        flex: 1;
    }

    .stocks {
        margin: 20px 0px;
        height: 240px;
        overflow-y: auto;
    }
</style>