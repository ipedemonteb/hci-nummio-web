<template>
    <div class="stock">
        <div class="stockHeader">
            <h2>{{ name }}</h2>
            <p>{{ symbol }}</p>
        </div>
        <div class="stockBody">
            <p>{{ formattedPrice }}</p>
            <p>{{ change }}</p>
        </div>
    </div>
</template>

<style scoped>
    .stock {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding-right: 10px;
    }

    .stockHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .stockBody {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script setup>
    import { defineProps, computed } from 'vue';

    const props = defineProps({
        name: String,
        symbol: String,
        price: Number,
        change: Number,
    });

    const formattedPrice = computed(() => `$${props.price.toFixed(2)}`);
</script>