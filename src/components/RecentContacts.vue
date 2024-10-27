<template>
    <div class="recentContacts">
        <h2 class="mainTitle">Contactos:</h2>
        <div class="recentInfo">
            <h3 class="necessarySpace">Recientes:</h3>
            <SearchBar class="searchBar"/>
        </div>
        <div class="contactsContainer">
            <ContactBox 
                v-for="contact in freqContacts"
                :key="contact.id"
                :name="contact.name"
            />
           
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
        font-size: 21px;
        margin-bottom: 22px;
    }
</style>

<script setup>
    import ContactBox from './ContactBox.vue';
    import SearchBar from './SearchBar.vue';

    const props = defineProps({
        freqContacts: {
            type: Array,
            required: true,
            default: () => []
        }
    });

</script>