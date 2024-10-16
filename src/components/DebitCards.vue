<script>
</script>

<template>
  <div class="cardsContainer">
    <div class="topContainer">
      <h1>Tarjetas de Débito</h1>
      <v-btn density="default" icon="mdi-plus" elevation="0" class="plusButton"></v-btn>
    </div>
    <div class="cards">
      <div class="cardContainer">
        <CardBox />
        <v-icon class="icon" icon="mdi-chevron-right"></v-icon>
      </div>
      <div class="cardContainer">
        <CardBox />
        <v-icon class="icon" icon="mdi-chevron-right"></v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cardsContainer {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px 40px;
  }

  .topContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .plusButton {
    border: 1px solid #000;
  }

  .cardContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cards {
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
    gap: 20px;
  }

  .icon {
    color: black;
    size: large;
    margin: 20px;
  }

</style>