import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useMovementsStore } from './movements'

export const useUsersStore = defineStore('users', () => {
    const initialUsers = [
        {
            id: 1,
            firstName: 'Bienvenida a nummio',
            lastName: '',
            cvu: 0,
            alias: 'nummio',
            profileImage: '/pfp.jpg',
            email: '',
            password: ''
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            cvu: '9876543210987654321098',
            alias: 'jane.smith',
            profileImage: '/pfp.jpg',
            email: 'janesmith@gmail.com',
            password: 'password123'
        },
        {
            id: 3,
            firstName: 'Alice',
            lastName: 'Johnson',
            cvu: '1122334455112233445511',
            alias: 'alice.johnson',
            profileImage: '/pfp.jpg',
            email: 'alicejohnson@gmail.com',
            password: 'password123'
        }
    ]

    const cvuCounter = ref(10000000000)
    const userLoggedInKey = 'userLoggedIn'

    const movementsStore = useMovementsStore()

    //localStorage.setItem(userLoggedInKey, JSON.stringify(initialUsers[0]))
    //localStorage.clear()

    const users = ref(initialUsers)
    const loggedIn = ref(false)

    const recentContacts = computed(() => users.value.slice(0, 6))
    //Esto debería chequear cantidad de transferencias y ordenar por eso

    function signup(user) {
        if (users.value.find(u => u.email === user.email) || user.password !== user.repeatPassword)
            return null
        const newUser = {
            id: users.value.length + 1,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            cvu: `03271989546${cvuCounter.value}`,
        }
        cvuCounter.value++
        users.value.push(newUser)
        //localStorage.setItem('users', JSON.stringify(users.value)) @TODO: Analizar si dejar o reemplazar por llamado a la API
        localStorage.setItem(userLoggedInKey, JSON.stringify(newUser))
        movementsStore.welcomeMovement()
        loggedIn.value = true
        return newUser
    }

    function login(loginInformation) {
        const { email, password } = loginInformation
        const user = users.value.find(user => user.email === email && user.password === password)
        if (user) {
          localStorage.setItem(userLoggedInKey, JSON.stringify(user))
          loggedIn.value = true
          return user
        }
        return null
    }

    function updateAlias(newAlias) {
      const userLoggedIn = getUserLoggedIn()
      if(users.value.find(user => user.id !== userLoggedIn.id && user.alias === newAlias))
        return false
      var i = 0;
      var found = false
      users.value.forEach(user => {
        if(!found && user.id === userLoggedIn.id){
          found = true
        }
        if(!found) i++
      })
      users.value[i].alias = newAlias
      localStorage.setItem(userLoggedInKey, JSON.stringify(users.value[i]))
      return true
    }

    function updateFirstName(newFirstName) {
      if (newFirstName === '') 
        return false
      const userLoggedIn = getUserLoggedIn()
      var i = 0;
      var found = false
      users.value.forEach(user => {
        if(!found && user.id === userLoggedIn.id){
          found = true
        }
        if(!found) i++
      })
      users.value[i].firstName = newFirstName
      localStorage.setItem(userLoggedInKey, JSON.stringify(users.value[i]))
      return true
    }
 
    function updateLastName(newLastName) {
      if (newLastName === '') 
        return false
      const userLoggedIn = getUserLoggedIn()
      var i = 0;
      var found = false
      users.value.forEach(user => {
        if(!found && user.id === userLoggedIn.id){
          found = true
        }
        if(!found) i++
      })
      users.value[i].lastName = newLastName
      localStorage.setItem(userLoggedInKey, JSON.stringify(users.value[i]))
      return true
    }
 
    function updatePassword(newPassword) {
      if (newPassword === '') 
        return false
      const userLoggedIn = getUserLoggedIn()
      var i = 0;
      var found = false
      users.value.forEach(user => {
        if(!found && user.id === userLoggedIn.id){
          found = true
        }
        if(!found) i++
      })
      users.value[i].password = newPassword
      localStorage.setItem(userLoggedInKey, JSON.stringify(users.value[i]))
      return true
    }

    function updateUser(newFirstName, newLastName, newPassword, newProfileImage) {
      if (newFirstName === '' || newLastName === '' || newPassword === '') 
        return false
      const userLoggedIn = getUserLoggedIn()
      var i = 0;
      var found = false
      users.value.forEach(user => {
        if(!found && user.id === userLoggedIn.id){
          found = true
        }
        if(!found) i++
      })
      users.value[i].firstName = newFirstName
      users.value[i].lastName = newLastName
      users.value[i].password = newPassword
      users.value[i].profileImage = newProfileImage
      localStorage.setItem(userLoggedInKey, JSON.stringify(users.value[i]))
      return true
    }
    /*function setAlias(alias) {
      if(!alias || alias === "" || users.value.find(user => user.alias === alias))
        return false
      const user = getUserLoggedIn()
      user.alias = alias
      return true
    }*/

    function logout() {
      localStorage.removeItem(userLoggedInKey)
      loggedIn.value = false
    }

    //Devuelve null si no hay usuario logueado
    function getUserLoggedIn() {
        const item = localStorage.getItem(userLoggedInKey)
        return item == null ? null : JSON.parse(item)
    }

    function getUserById(id) {
      return users.value.find(user => user.id === id)
    }

    function getUserByCVU(cvu) {
        return cvu != 0 && users.value.find(user => user.cvu == cvu)
    }

    function getUserByAlias(alias) {
        return alias != '' && users.value.find(user => user.alias === alias)
    }

    function getUserById(id) {
        return users.value.find(user => user.id === id)
    }


    return {users, loggedIn, recentContacts, signup, login, getUserLoggedIn, getUserByCVU, getUserByAlias, getUserById, updateAlias, logout, updateFirstName, updateLastName, updatePassword, updateUser}
})
