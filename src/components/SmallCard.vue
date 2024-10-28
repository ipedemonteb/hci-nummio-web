<template>
    <div class="credit-card">
        <!-- Card Content -->
        <div class="card-content">
            <div class="card-top">
                <div class="cardholder-name">
                    <p class="label"></p>
                    <p class="value">{{ bankName }}</p>
                </div>
                <div class="cardholder-name">
                    <p class="label">Titular</p>
                    <p class="value">{{ cardholderName }}</p>
                </div>
                <div class="card-type">
                    <slot name="card-type">
                        <!-- Default to a generic card icon if no slot content provided -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                    </slot>
                </div>
            </div>
            <div class="card-number">
                <p class="label"></p>
                <p class="value">{{ formattedCardNumber }}</p>
            </div>
            <div class="card-bottom">
                <div class="expiry-date">
                    <p class="label">Fecha de vencimiento</p>
                    <p class="value">{{ expiryDate }}</p>
                </div>
                <div class="cvv">
                    <p class="label">CVV</p>
                    <p class="value">{{ cvv }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    cardholderName: {
        type: String,
        default: 'JOHN DOE'
    },
    cardNumber: {
        type: String,
        default: '0000 0000 0000 0000'
    },
    expiryDate: {
        type: String,
        default: '00/00'
    },
    cvv:{ 
        type: String,
        default: '000'
    },
    bankName: {
        type: String,
        default: 'Banco'
    }
});

const formattedCardNumber = computed(() => {
    return props.cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
});

</script>

<style scoped>
.credit-card {
    width: 384px;
    height: 224px;
    margin: auto;
    border-radius: 12px;
    position: relative;
    color: white;
    background-color: #9990FF;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: transform 0.3s;
    overflow: hidden;
}

.credit-card:hover {
    transform: scale(1.05);
}

.card-content {
    position: relative;
    z-index: 1;
    padding: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.label {
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 4px;
}

.value {
    font-size: 16px;
    letter-spacing: 1px;
}

.card-number .value {
    font-size: 20px;
    letter-spacing: 2px;
}

.card-bottom {
    display: flex;
    justify-content: space-between;
}

.card-type svg {
    width: 56px;
    height: 56px;
}

@media (max-width: 480px) {
    .credit-card {
        width: 100%;
        max-width: 384px;
        height: auto;
        aspect-ratio: 16 / 9;
    }
}
</style>
