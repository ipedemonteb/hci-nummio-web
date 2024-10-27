import { defineStore } from "pinia";
import { useUsersStore } from "./users";
import { ref } from "vue";
import { useMovementsStore } from "./movements";

export const useContactsStore = defineStore('contacts', () => {
  const usersStore = useUsersStore()
  const movementsStore = useMovementsStore()

  const contacts = ref([
    {
      id: 1,
      user: 4,
      contactUser: {
        name: 'Jane Smith',
        cvu: '9876543210987654321098',
        alias: 'jane.smith'
      }
    }
  ])
  const idCounter = ref(contacts.value.length+1)

  function getContacts() {
    const user = usersStore.getUserLoggedIn()
    const userContacts = []
    contacts.value.forEach(contact => {
      if(contact.user === user.id) {
        const contactData = {
          id: contact.id,
          name: contact.contactUser.name,
          cvu: contact.contactUser.cvu,
          alias: contact.contactUser.alias
        }
        userContacts.push(contactData)
      }
    })
    return userContacts
  }

  function getFrequentlyContacts(top) {
    const userContacts = getContacts()
    const userMovements = movementsStore.getSourceMovements()
    const frequentlyContacts = []
    userMovements.forEach(movement => {
      const targetUser = usersStore.getUserById(movement.target)
      const userContact = userContacts.find(contact => contact.cvu === targetUser.cvu)
      if(userContact && !frequentlyContacts.find(freqContact => freqContact.cvu === targetUser.cvu)){
        frequentlyContacts.push(userContact)
      }
    })
    return frequentlyContacts.slice(0, top)
  }

  function addContact(cvuOrAlias) {
    var contactUser = usersStore.getUserByCVU(cvuOrAlias)
    if(contactUser == null) {
      contactUser = usersStore.getUserByAlias(cvuOrAlias)
      if(contactUser == null)
        return false
    }
    const user = usersStore.getUserLoggedIn()
    if(contacts.value.find(contact => contact.user.id === user.id))
      return false
    const newContact = {
      id: idCounter.value,
      user: user.id,
      contactUser: {
        name: `${contactUser.firstName} ${contactUser.lastName}`,
        cvu: contactUser.cvu,
        alias: contactUser.alias
      },
    }
    idCounter.value++
    contacts.value.push(newContact)
    return true
  }

  function deleteContact(contactId) {
    const user = usersStore.getUserLoggedIn()
    const contactIndex = contacts.value.findIndex(contact => contact.id === contactId && contact.user === user.id)
    if(contactIndex === -1)
      return false
    contacts.value.splice(contactIndex, 1)
    return true
  }

  return {getContacts, addContact, getFrequentlyContacts, deleteContact}
})
