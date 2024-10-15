<template>
  <!-- <v-app> -->
    <main>
      <div class="col full-width">
        <AppHeader />
        <div class="row app-content">
          <SideMenu />
          <div class="view-container">
            <RouterView />
          </div>
        </div>
      </div>
    </main>
    <!-- <AppFooter /> -->
  <!-- </v-app> -->
</template>

<style>
  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .full-width {
    width: 100%;
  }

  .half-width {
    width: 50%;
  }
</style>

<style scoped>
  .app-content {
    margin-top: 6%;
    width: 100%;
  }

  .view-container {
    float: right;
    width: 85%; /* @TODO: ver si hay manera de que se detecte el ancho restante en vez de hacer esto */
  }
</style>

<script setup>
  import AppHeader from './components/AppHeader.vue';
  import SideMenu from './components/SideMenu.vue';
</script>
