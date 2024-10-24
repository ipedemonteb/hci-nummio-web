import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './users'

export const useMovementsStore = defineStore('movements', () => {
    /* const initialMovements = [
        { id: 1, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 2, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 3, action: "Transferencia recibida", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: false },
        { id: 4, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 5, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
        { id: 6, action: "Transferencia enviada", source: "Fernando Alonso", amount: "500.00", timeAgo: "2 horas", isSent: true },
    ] */

    const userStore = useUsersStore()

    const initialMovements = [
        { id: 1, source: 1, target: 2, amount: 500, date: new Date('2024-08-12') },
    ]

    const movements = ref(initialMovements)
    const recentMovements = computed(() => getUserMovements().sort((a,b) => a.date - b.date).slice(0, 6))

    /* function makeTransaction(movement) {
        const newMovement = {
            id: movements.value.length + 1,
            action: "Transferencia enviada",
            source: movement.source,
            amount: movement.amount.toFixed(2).toString(),
            timeAgo: "Just now",
            isSent: true,
        }
        movements.value.push(newMovement)
        //  localStorage.setItem('movements', JSON.stringify(movements.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
    } */

    function createMovement(target, amount) {
        const user = userStore.getUserLoggedIn()
        const newMovement = {
            id: movements.value.length + 1,
            source: user.id,
            target,
            amount,
            date: new Date()
        }
        movements.value.push(newMovement)
        // localStorage.setItem('movements', JSON.stringify(movements.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
    }

    function getUserMovements() {
        const user = userStore.getUserLoggedIn()
        const userMovements = []
        movements.value.forEach(movement => {
            if([movements.source, movements.target].includes(user.id))
                userMovements.push(movement)
        })
        return userMovements
    }

    function getBalance() {
        const user = userStore.getUserLoggedIn()
        return movements.value.reduce((acc, movement) => {
            let mult = movement.source === user.id ? -1 : (movement.target === user.id ? 1 : 0);
            return acc + mult*movement.amount;
        }, 0)
    }

    /* function receiveTransaction(movement) {
        const newMovement = {
            id: movements.value.length + 1,
            action: "Transferencia recibida",
            source: movement.source,
            amount: movement.amount.toFixed(2).toString(),
            timeAgo: "Just now",
            isSent: false,
        }
        movements.value.push(newMovement)
        // localStorage.setItem('movements', JSON.stringify(movements.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
    } */

    // Esto se ejecuta 1 vez al iniciar la store
    /*function loadMovements() {
        const storedMovements = localStorage.getItem('movements')
        if (storedMovements) {
            movements.value = JSON.parse(storedMovements)
        }
    }
    loadMovements()*/

    return { recentMovements, createMovement, getUserMovements, getBalance }
})
