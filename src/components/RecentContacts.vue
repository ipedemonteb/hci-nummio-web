<template>
    <div class="recentContacts">
        <h1>Contactos:</h1>
        <div class="recentInfo">
            <h2 class="necessarySpace">Recientes:</h2>
            <SearchBar class="searchBar"/>
        </div>
        <div class="contactsContainer">
            <ContactBox />
            <ContactBox />
            <ContactBox />
            <ContactBox />
        </div>
    </div>
</template>

<style scoped>
    .recentContacts {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
        flex: 1;
    }

    .recentInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    .searchBar {
        width: 200px;
    }

    .necessarySpace {
        margin-bottom: 22px;
    }
</style>

<script setup>
    import ContactBox from './ContactBox.vue';
    import SearchBar from './SearchBar.vue';

</script>