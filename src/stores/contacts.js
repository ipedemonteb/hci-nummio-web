import { defineStore } from "pinia";
import { useUsersStore } from "./users";
import { ref } from "vue";

export const useContactsStore = defineStore('contacts', () => {
  const usersStore = useUsersStore()
  const contacts = ref([
    {
      id: 1,
      user: 4,
      contactUser: {
        name: 'Jane Smith',
        cvu: 9876543210,
        alias: 'jane.smith'
      }
    }
  ])
  const idCounter = ref(contacts.value.length+1)

  function getContacts() {
    const user = usersStore.getUserLoggedIn()
    const userContacts = []
    contacts.value.forEach(contact => {
      if(contact.user === user.id)
        userContacts.push(contact.contactUser)
    })
    return userContacts
  }

  function addContact(cvuOrAlias) {
    var contactUser = usersStore.getUserByCVU(cvuOrAlias)
    if(user == null) {
      user = usersStore.getUserByAlias(cvuOrAlias)
      if(user == null)
        return false
    }
    if(contacts.value.find(contact => contact.user.id === user.id))
      return false
    const user = usersStore.getUserLoggedIn()
    const newContact = {
      id: contacts.value.length + 1,
      user: user.id,
      contactUser: {
        name: `${contactUser.firstName} ${contactUser.lastName}`,
        cvu: contactUser.cvu,
        alias: contactUser.alias
      },
    }
    contacts.value.push(newContact)
    return true
  }

  return {getContacts, addContact}
})
