<template>
    <div class="recentContacts">
        <div class="recentContactsContainer">
            <h1>Contactos:</h1>
            <div class="recentInfo">
                <h2>Recientes:</h2>
                <SearchBar class="searchBar"/>
            </div>
            <div class="contactsContainer">
                <ContactBox />
                <ContactBox />
                <ContactBox />
                <ContactBox />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .recentContacts {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .recentContactsContainer {
        margin: 30px 40px;
    }

    .recentInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .searchBar {
        width: 200px;
    }

</style>

<script setup>
    import ContactBox from './ContactBox.vue';
    import SearchBar from './SearchBar.vue';

</script>