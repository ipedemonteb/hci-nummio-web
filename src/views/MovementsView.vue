<script setup>
import { ref, computed } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import MovementBox from '@/components/MovementBox.vue';
import { useMovementsStore } from '@/stores/movements';

const movementsStore = useMovementsStore();

const itemsPerPage = 8;
const currentPage = ref(1);

const paginatedMovements = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return movementsStore.getUserMovements().slice(start, end); 
});

const totalPages = computed(() => Math.ceil(movementsStore.getUserMovements().length / itemsPerPage));

</script>

<template>
  <div class="contentContainer">
    <div class="allMovements full-width">
      <div class="title">
        <h1 class="mainTitle">Movimientos: </h1>
      </div>
      <div class="searchContainer">
        <v-select 
          density="compact"
          clearable
          label="Filtrar Por"
          :items="['Mas Recientes', 'Mas Antiguos', 'Monto Mayor', 'Monto Menor']"
          variant="outlined"
          class="selectContainer"
        ></v-select>
        <SearchBar class="searchBar"/>
      </div>

      <div class="movementsContainer">
        <MovementBox 
          v-for="(movement) in movementsStore.getUserMovements()" 
          :key="movement.id" 
          :otherUser="movement.otherUser" 
          :amount="movement.amount" 
          :timeAgo="movement.timeAgo"
          :isSent="movement.isSent"
        />
      </div>

      <div class="paginationContainer">
        <v-pagination 
          v-show="totalPages > 1"
          v-model="currentPage"
          :length="totalPages"
          total-visible="7"
          color="primary"
        ></v-pagination>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .title {
    display:flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .allMovements {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    padding: 30px 40px;
    border-radius: 10px;
  }

  .searchContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .selectContainer {
    max-width: 200px;
  }

  .searchBar {
    width: 300px;
    margin-top: 0px;
  }


</style>