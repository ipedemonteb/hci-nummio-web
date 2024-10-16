<script setup>
import { ref, computed } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import MovementBox from '@/components/MovementBox.vue';

const movements = ref([
  { action: "Transferencia enviada", source: "Fernando Alonso", amount: "5000.00", timeAgo: "2 horas" },
  { action: "Transferencia recibida", source: "Carlos Sainz", amount: "3000.00", timeAgo: "1 hora" },
  { action: "Transferencia enviada", source: "Sebastian Vettel", amount: "7000.00", timeAgo: "4 horas" },
  { action: "Transferencia enviada", source: "Lewis Hamilton", amount: "1500.00", timeAgo: "3 horas" },
  { action: "Transferencia enviada", source: "Fernando Alonso", amount: "5000.00", timeAgo: "2 horas" },
  { action: "Transferencia recibida", source: "Carlos Sainz", amount: "3000.00", timeAgo: "1 hora" },
  { action: "Transferencia enviada", source: "Sebastian Vettel", amount: "7000.00", timeAgo: "4 horas" },
  { action: "Transferencia enviada", source: "Lewis Hamilton", amount: "1500.00", timeAgo: "3 horas" },  
  { action: "Transferencia enviada", source: "Fernando Alonso", amount: "5000.00", timeAgo: "2 horas" },
  { action: "Transferencia recibida", source: "Carlos Sainz", amount: "3000.00", timeAgo: "1 hora" },
  { action: "Transferencia enviada", source: "Sebastian Vettel", amount: "7000.00", timeAgo: "4 horas" },
  { action: "Transferencia enviada", source: "Lewis Hamilton", amount: "1500.00", timeAgo: "3 horas" },
]);

const itemsPerPage = 8;
const currentPage = ref(1);

const paginatedMovements = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return movements.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(movements.value.length / itemsPerPage));

</script>

<template>
  <div class="contentContainer">
    <div class="allMovements full-width">
      <h1>Últimos Movimientos: </h1>
      
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
          v-for="(movement, index) in paginatedMovements" 
          :key="index" 
          :action="movement.action" 
          :source="movement.source" 
          :amount="movement.amount" 
          :timeAgo="movement.timeAgo"
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
  </div>
</template>

<style scoped>
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