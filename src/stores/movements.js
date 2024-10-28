import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './users'

export const useMovementsStore = defineStore('movements', () => {

    const userStore = useUsersStore()

    const movements = ref([])
    const recentMovements = computed(() => getUserMovements().slice(0, 6))

    function welcomeMovement() {
      const user = userStore.getUserLoggedIn()
      movements.value.push({ id: movements.value.length + 1, source: 1, target: user.id, amount: 1000, date: new Date()})
    }

    function createMovement(userToTransfer, amount) {
        const user = userStore.getUserLoggedIn()
        const newMovement = {
            id: movements.value.length + 1,
            source: user.id,
            target: userToTransfer.id,
            amount,
            date: new Date()
        }
        movements.value.push(newMovement)
        // localStorage.setItem('movements', JSON.stringify(movements.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
    }

    function getUserMovements() {
        const user = userStore.getUserLoggedIn()
        const userMovements = []
        movements.value.sort((a,b) => b.date - a.date).forEach(movement => {
            if([movement.source, movement.target].includes(user.id)) {
                const sourceUser = userStore.getUserById(movement.source)
                const targetUser = userStore.getUserById(movement.target)
                const movementData = {
                    id: movement.id,
                    isSent: sourceUser.id === user.id,
                    amount: movement.amount,
                    timeAgo: movement.date,
                    otherUser: sourceUser.id === user.id? targetUser : sourceUser,
                    ...movement
                }
                userMovements.push(movementData)
            }
        })
        return userMovements
    }

    function getBalance() {
        const userMovements = getUserMovements()
        const user = userStore.getUserLoggedIn()
        return userMovements.reduce((acc, movement) => {
            let mult = movement.source === user.id ? -1 : 1;
            return acc + mult*movement.amount;
        }, 0)
    }

    function getMovementsByType(type) {
        const userMovements = getUserMovements()
        const movementsResponse = []
        userMovements.forEach(movement => {
            if((type == 'source' && movement.isSent) || (type == 'target' && !movement.isSent))
                movementsResponse.push(movement)
        })
        return movementsResponse
    }

    function getSourceMovements() {
        return getMovementsByType('source')
    }

    function getTargetMovements() {
        return getMovementsByType('target')
    }

    return { recentMovements, createMovement, welcomeMovement, getUserMovements, getBalance, getSourceMovements, getTargetMovements }
})
