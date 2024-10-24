import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovementsStore = defineStore('movements', () => {
    const initialMovements = [
        { id: 1, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 2, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 3, action: "Transferencia recibida", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: false },
        { id: 4, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 5, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 6, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
    ]
    const movements = ref(initialMovements)
    const recentMovements = computed(() => movements.value.slice(0, 6))

    const makeTransaction = (movement) => {
        const newMovement = {
            id: movements.value.length + 1,
            action: "Transferencia enviada",
            source: movement.source,
            amount: movement.amount.toFixed(2).toString(),
            timeAgo: "Just now",
            isSent: true,
        }
        movements.value.push(newMovement)
        localStorage.setItem('movements', JSON.stringify(movements.value))
    }

    const receiveTransaction = (movement) => {
        const newMovement = {
            id: movements.value.length + 1,
            action: "Transferencia recibida",
            source: movement.source,
            amount: movement.amount.toFixed(2).toString(),
            timeAgo: "Just now",
            isSent: false,
        }
        movements.value.push(newMovement)
        localStorage.setItem('movements', JSON.stringify(movements.value))
    }

    // Esto se ejecuta 1 vez al iniciar la store
    function loadMovements() {
        const storedMovements = localStorage.getItem('movements')
        if (storedMovements) {
            movements.value = JSON.parse(storedMovements)
        }
    }
    loadMovements()

    return { movements, recentMovements, makeTransaction, receiveTransaction }
})