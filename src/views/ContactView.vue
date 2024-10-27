<script setup>
import AddContact from '@/components/AddContact.vue';
import ContactBox from '@/components/ContactBox.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useContactsStore } from '@/stores/contacts';
import { ref, computed } from 'vue';

/*const allContacts = ref([
  { id: 1, name: 'Contacto 1' },
  { id: 2, name: 'Contacto 2' },
  { id: 3, name: 'Contacto 3' },
  { id: 4, name: 'Contacto 4' },
  { id: 5, name: 'Contacto 5' },
  { id: 6, name: 'Contacto 6' },
  { id: 7, name: 'Contacto 7' },
  { id: 8, name: 'Contacto 8' },
  { id: 9, name: 'Contacto 9' },
  { id: 10, name: 'Contacto 10' },
  { id: 11, name: 'Contacto 11' },
  { id: 12, name: 'Contacto 12' },
  { id: 13, name: 'Contacto 13' },
  { id: 14, name: 'Contacto 14' },
]);*/
const contactsStore = useContactsStore()
const allContacts = computed(() => contactsStore.getContacts())

const currentPage = ref(1);
const contactsPerPage = 10;

const totalPages = computed(() => {
  return Math.ceil(allContacts.value.length / contactsPerPage);
});

const paginatedContacts = computed(() => {
  const start = (currentPage.value - 1) * contactsPerPage;
  const end = start + contactsPerPage;
  return allContacts.value.slice(start, end);
});

const isAddDialogVisible = ref(false);
const openAddDialog = () => {
    isAddDialogVisible.value = true;
};
const closeAddDialog = () => {
    isAddDialogVisible.value = false;
};

</script>

<template>
    <div class="contentContainer">
      <div class="allContacts full-width">
        <h1 class="mainTitle title">Contactos: </h1>

        <div class="searchContainer">
          <SearchBar class="searchBar"/>
          <v-btn append-icon="mdi-plus-box-multiple-outline" text="Agregar" variant="outlined" @click="openAddDialog"/>
        </div>

        <div class="movementsContainer">
            <ContactBox
                v-for="contact in paginatedContacts"
                :key="contact.id"
                :name="contact.name"
                :contact="contact"
            />
        </div>

        <div class="paginationContainer">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            total-visible="7"
            color="primary"
          ></v-pagination>
        </div>

      </div>

      <v-dialog v-model="isAddDialogVisible" max-width="700">
        <AddContact @closeDialog="closeAddDialog" />
      </v-dialog>

    </div>
</template>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
  }

  .allContacts {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    padding: 30px 40px;
    border-radius: 10px;
  }

  .searchContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }

  .selectContainer {
    max-width: 200px;
  }

  .searchBar {
        width: 300px;
  }

</style>
