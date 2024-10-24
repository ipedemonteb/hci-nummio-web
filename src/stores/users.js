import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
    const initialUsers = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            cvu: 1234567890,
            alias: 'john.doe',
            profileImage: '/pfp.jpg',
            email: 'johndoe@gmail.com',
            password: 'password123'
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            cvu: 9876543210,
            alias: 'jane.smith',
            profileImage: '/pfp.jpg',
            email: 'janesmith@gmail.com',
            password: 'password123'
        },
        {
            id: 3,
            firstName: 'Alice',
            lastName: 'Johnson',
            cvu: 1122334455,
            alias: 'alice.johnson',
            profileImage: '/pfp.jpg',
            email: 'alicejohnson@gmail.com',
            password: 'password123'
        }
    ]

    const userLoggedInKey = 'userLoggedIn'

    localStorage.setItem(userLoggedInKey, JSON.stringify(initialUsers[0]))

    const users = ref(initialUsers)

    //Esto debería chequear cantidad de transferencias y ordenar por eso
    const recentContacts = computed(() => users.value.slice(0, 6))

    function signup(user) {
        if (users.value.find(u => u.email === newUser.email))
            return null
        const newUser = {
            id: users.value.length + 1,
            ...user
        }
        users.value.push(newUser)
        //localStorage.setItem('users', JSON.stringify(users.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
        localStorage.setItem(userLoggedInKey, JSON.stringify(users.value))
        return newUser
    }

    function login(loginInformation) {
        const { email, password } = loginInformation
        const user = users.value.find(user => user.email === email && user.password === password)
        if (user) {
            localStorage.setItem(userLoggedInKey, user)
            return user
        }
        return null
    }

    //Devuelve null si no hay usuario logueado
    function getUserLoggedIn() {
        return JSON.parse(localStorage.getItem(userLoggedInKey))
    }

    function getUserByCVU(cvu) {
        return users.value.find(user => user.cvu === cvu)
    }

    function getUserById(id) {
        return users.value.find(user => user.id === id)
    }

    //@TODO: Analizar si dejar o reemplazar por llamado a la API
    /*function loadUsers() {
        const storedUsers = localStorage.getItem('users')
        if (storedUsers) {
            users.value = JSON.parse(storedUsers)
        }
    }
    loadUsers()
    */
    return {users, recentContacts, signup, login, getUserLoggedIn, getUserByCVU, getUserById}
})
