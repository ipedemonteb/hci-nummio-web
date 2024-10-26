<script setup>
import PayService from '@/components/PayService.vue';


</script>

<template>
    <div class="contentContainer">
        <div class="columnContainer full-width">
            <PayService />
        </div>
    </div>
</template>

<style scoped>
.service {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    padding: 60px 100px;
    border-radius: 10px;
}
</style>