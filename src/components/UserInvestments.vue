<script setup>
    import InvestmentGraph from './InvestmentGraph.vue';
</script>

<template>
    <div class="investments">
        <h2 class="mainTitle">Rendimientos:</h2>
        <div class="investmentContainer">
            <InvestmentGraph />
        </div>
    </div>
</template>

<style scoped>
.investments {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px 40px;
    flex: 1;
}
</style>