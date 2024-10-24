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
            username: 'johndoe',
            password: 'password123'
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            cvu: 9876543210,
            alias: 'jane.smith',
            profileImage: '/pfp.jpg',
            username: 'janesmith',
            password: 'password123'
        },
        {
            id: 3,
            firstName: 'Alice',
            lastName: 'Johnson',
            cvu: 1122334455,
            alias: 'alice.johnson',
            profileImage: '/pfp.jpg',
            username: 'alicejohnson',
            password: 'password123'
        }
    ]

    const users = ref(initialUsers)

    //Esto debería chequear cantidad de transferencias y ordenar por eso
    const recentContacts = computed(() => users.value.slice(0, 6))

    function signup(user) {
        const newUser = {
            id: users.value.length + 1,
            ...user
        }
        if (users.value.find(u => u.username === newUser.username))
            return null
        users.value.push(newUser)
        //localStorage.setItem('users', JSON.stringify(users.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
        localStorage.setItem('userLoggedIn', JSON.stringify(users.value))
        return newUser
    }

    function login(loginInformation) {
        const { username, password } = loginInformation
        const user = users.value.find(user => user.username === username && user.password === password)
        if (user) {
            localStorage.setItem('userLoggedin', user)
            return user
        }
        return null
    }

    //Devuelve null si no hay usuario logueado
    function getUserLoggedin() {
        return localStorage.getItem('userLoggedin')
    }

    function getUserByCVU(cvu) {
        return users.value.find(user => user.cvu === cvu)
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
    return {users, recentContacts, addUser, getUserLoggedin}
})