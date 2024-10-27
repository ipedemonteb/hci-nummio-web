<template>
    <div class="profileContainer">
        <img :src="user.profileImage" alt="Profil picture for user" class="profilePicture"/>
        <h3 class="profileName text-primary">{{ name }}</h3>
    </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users';

const usersStore = useUsersStore();
const user = usersStore.getUserLoggedIn();
const props = defineProps({
  name: String
})

</script>

<style scoped>
    .profileContainer{
        display: flex;
        align-items: center;
    }

    .profilePicture {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid #6B4EFF;
        object-fit: cover;
    }

    .profileName {
        margin-left: 5px;
    }
</style>
