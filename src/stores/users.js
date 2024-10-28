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
    ]

    const cvuCounter = ref(10000000000)
    const userLoggedInKey = 'userLoggedIn'

    const movementsStore = useMovementsStore()

    const users = ref(initialUsers)
    const loggedIn = ref(false)

    const recentContacts = computed(() => users.value.slice(0, 6))

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
            profileImage: '/pfp.jpg',
        }
        cvuCounter.value++
        users.value.push(newUser)
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
      localStorage.setItem(userLoggedInKey, JSON.stringify(users.value[i]))
      return true
    }

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

    function getUserByMail(email) {
        return email != '' && users.value.find(user => user.email === email)
    }

    function recoverPassword(newPassword, email) {
      if (newPassword === '')
        return false
      const userLoggedIn = getUserByMail(email)
      var i = 0;
      var found = false
      users.value.forEach(user => {
        if(!found && user.id === userLoggedIn.id){
          found = true
        }
        if(!found) i++
      })
      users.value[i].password = newPassword
      console.log("Updated password")
      return true
    }

    return {users, loggedIn, recentContacts, signup, login, getUserLoggedIn, getUserByCVU, getUserByAlias, getUserById, getUserByMail, updateAlias, logout, updateFirstName, updateLastName, updatePassword, updateUser, recoverPassword}
})
