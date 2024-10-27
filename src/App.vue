<template>
    <main class="mainPage">
      <div class="mainContent full-width" v-if="loggedIn">
        <AppHeader />
        <div class="row app-content">
          <SideMenu />
          <div class="view-container">
            <RouterView />
          </div>
        </div>
      </div>

      <PasswordRecoverView v-else />
      <!-- <LoginView v-else/> -->
    </main>
</template>

<style>
  .contentContainer {
    margin: 30px;
    display: flex;
    flex-direction: row;
  }

  .columnContainer {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .mainTitle {
    color: #39288E;
  }

  .full-width {
    width: 100%;
  }

  .half-width {
    width: 50%;
  }
</style>

<style scoped>
  .mainPage {
    font-family: 'SF Pro Display', 'Roboto', sans-serif;
    height: 100vh;
    overflow: hidden;
  }

  .mainContent {
    display: flex;
    flex-direction: column;
  }

  .app-content {
    margin-top: 110px;
    display: flex;
    height: calc(100vh - 110px);
  }


  .view-container {
    width: 85%; /* @TODO: ver si hay manera de que se detecte el ancho restante en vez de hacer esto */
    height: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }
</style>

<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue';
  import SideMenu from './components/SideMenu.vue';
  import LoginView from './views/LoginView.vue';
  import { useUsersStore } from './stores/users';
import { computed } from 'vue';
import PasswordRecoverView from './views/PasswordRecoverView.vue';

  const usersStore = useUsersStore()
  const loggedIn = computed(() => usersStore.loggedIn)
</script>
