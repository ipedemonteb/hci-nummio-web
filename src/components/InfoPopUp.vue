<template>
  <v-dialog class="popUpContainer" :model-value="showInfoPopup" @update:model-value="updateShowPopup">
    <v-card class="popup-card">

    <v-icon
    color="#6B4EFF"
    @click="closeDialog"
    class="close-button"
    >mdi-close</v-icon>
      <v-card-title class="cardTitle">
        Mis Datos
      </v-card-title>
      <ProfileLogo :name="name" class="profileDisplay"/>
      <div class="infoText">
        Tu CVU:
      </div>
      <div class="cvu-container">
        <div class="infoCard">
          <div class="copyableText">
            {{cvu}}
          </div>
        </div>
        <button class="copyButton" @click="copyCvu">
          <img class="copyImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABcXFyenp6Ojo5KSkpWVlabm5umpqbg4OCGhoZOTk7Pz8/t7e16enrV1dU/Pz/l5eVnZ2f19fV4eHg5OTmysrLT09O5ublhYWGQkJBtbW0xMTEkJCSAgIBsbGwcHBwTExMtLS3ExMT79I7cAAAEYUlEQVR4nO2dbVfiMBCFW0EoiIuIsKKIb///P65d191lJqWTmpsh59znszm3j9CmpZNMVRFCCCGEEEIIIeQ3y+bhcXKZg4t5M8uut7itM3O3yOm33ef2a3m7z+W33Hj4tezzfFlHXn4tTQbB7CfgMXdwwQtfwbq+BQs+egvW9SNUsPHWaxkBBWfecp8Ar6hu08QxG5jg1lvtC9jU/+Jt9sUTSPDdW+wfoHtU57n+f0Azhg7azMcZmF/qZIjgUqZkug/+YKYu4pBoeSW9QYR0cSPCt4iQgwhZIUK6WInwMSLk+Thjgsjo5uo4HXL/LS6lD4iMbh6O03eIDPHcNEVkdCPu+a8QGTTEQsMU0BALDVNAQyw0TAENsdAwBTTEQsMU0BALDVNAQyw0TAENsQjDm+Wig+X1emjGWRme5GkyHfTmphzDltdR/EdZluEH89iM4gyj38EVaFhPor6qJRrGveUs07Be2jMKNYz4FEs1rM3nYrGG5jK4Yg3rgzGjXENr9U3Bhpe2jIINjZV+JRva6rdKNrRNikUbmuqbzspw33QxnYQMTXPiWRme+p1mJQsZWyw3NsUYqjK/FsvVtCDDtTa0LAkryLCaKkPLTxolGerFPZY1byUZ6qp7S8lt2YYXhgwaYqGhgIZBaIiFhgIaBqEhFhoKaBiEhlhoKKBhEBpioaGAhkFoiIWGAhoGoSEWGgpoGISGWGgooGEQGmKhoYCGQWiIhYYCGgahIRYaCmgYhIZYaCigYRAaYqGhYJCh2CkZst90N9O4Ax5kKBqwZN7tWnyD+krvBxnOxZjrFAduRa6C6VvaO8hQ7jpvXHqaBtk8oG+RzyBDtQ5lk23f+WvVHaFvp4RBhoHuD7tRFgKNNaKP1WR4p4O86O3goUaYDBcOKh30riZUI0yGlUtPwBBvvYeqhtgMz6aVTn83JDXEZhhafeqBYXW9GmM0vHbQCWCYpdQYo+F5dO2y7G+lBlkNq7GDkcC0F4saZTb0nxRtzazUMLuh96dofGhT4yIMfeeMd+NBqoExhtXarQHbs3lTKzU0yrCqli4T49VP+xGqwZGGVbWahrbXALKfRj2rfd/wg/V7M5538kNl3Jz469OMm0XsDwpJDHv8VYZ1T7EkZDDUN3g/kmecgIYJoCEYGiaAhmBomAAagqFhAmgIhoYJoCEYGiaAhmBomAAagslgqH9NTJ/Rjf7/PqcPURm9NTAJuVfhll12I9GGlu2YE6GrRgCllIGXN9mqxGSRYW0p34jmoFPqiJdHqaMHNWI7jT4VPtjdz9As9F7eLekFz6Uy5Q87gKEqCXUFcBqeSe3NFwjB0HzhBqjsPnzKu4CqSff2+gts5URwwnDgFSVYVTtvt09s3Z6G8eIt12LqEzSUlbddbetsUbQi/LHUW9FWrPkt1pnLw47Js4bwwU8w0+NaNXO6CYdeRAULB8dD1uWD2cs1d9vBPeS/w2I03k3g3I6bXKcfIYQQQgghhBBCCJ5f4c1caNezZNkAAAAASUVORK5CYII=">
        </button>
      </div>

      <div class="infoText">
        Tu alias:
      </div>
      <div class="cvu-container">
        <div class="infoCard">
          <div class="copyableText">
            {{alias}}
          </div>
        </div>
        <button class="copyButton" @click="copyAlias">
          <img class="copyImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABcXFyenp6Ojo5KSkpWVlabm5umpqbg4OCGhoZOTk7Pz8/t7e16enrV1dU/Pz/l5eVnZ2f19fV4eHg5OTmysrLT09O5ublhYWGQkJBtbW0xMTEkJCSAgIBsbGwcHBwTExMtLS3ExMT79I7cAAAEYUlEQVR4nO2dbVfiMBCFW0EoiIuIsKKIb///P65d191lJqWTmpsh59znszm3j9CmpZNMVRFCCCGEEEIIIeQ3y+bhcXKZg4t5M8uut7itM3O3yOm33ef2a3m7z+W33Hj4tezzfFlHXn4tTQbB7CfgMXdwwQtfwbq+BQs+egvW9SNUsPHWaxkBBWfecp8Ar6hu08QxG5jg1lvtC9jU/+Jt9sUTSPDdW+wfoHtU57n+f0Azhg7azMcZmF/qZIjgUqZkug/+YKYu4pBoeSW9QYR0cSPCt4iQgwhZIUK6WInwMSLk+Thjgsjo5uo4HXL/LS6lD4iMbh6O03eIDPHcNEVkdCPu+a8QGTTEQsMU0BALDVNAQyw0TAENsdAwBTTEQsMU0BALDVNAQyw0TAENsQjDm+Wig+X1emjGWRme5GkyHfTmphzDltdR/EdZluEH89iM4gyj38EVaFhPor6qJRrGveUs07Be2jMKNYz4FEs1rM3nYrGG5jK4Yg3rgzGjXENr9U3Bhpe2jIINjZV+JRva6rdKNrRNikUbmuqbzspw33QxnYQMTXPiWRme+p1mJQsZWyw3NsUYqjK/FsvVtCDDtTa0LAkryLCaKkPLTxolGerFPZY1byUZ6qp7S8lt2YYXhgwaYqGhgIZBaIiFhgIaBqEhFhoKaBiEhlhoKKBhEBpioaGAhkFoiIWGAhoGoSEWGgpoGISGWGgooGEQGmKhoYCGQWiIhYYCGgahIRYaCmgYhIZYaCigYRAaYqGhYJCh2CkZst90N9O4Ax5kKBqwZN7tWnyD+krvBxnOxZjrFAduRa6C6VvaO8hQ7jpvXHqaBtk8oG+RzyBDtQ5lk23f+WvVHaFvp4RBhoHuD7tRFgKNNaKP1WR4p4O86O3goUaYDBcOKh30riZUI0yGlUtPwBBvvYeqhtgMz6aVTn83JDXEZhhafeqBYXW9GmM0vHbQCWCYpdQYo+F5dO2y7G+lBlkNq7GDkcC0F4saZTb0nxRtzazUMLuh96dofGhT4yIMfeeMd+NBqoExhtXarQHbs3lTKzU0yrCqli4T49VP+xGqwZGGVbWahrbXALKfRj2rfd/wg/V7M5538kNl3Jz469OMm0XsDwpJDHv8VYZ1T7EkZDDUN3g/kmecgIYJoCEYGiaAhmBomAAagqFhAmgIhoYJoCEYGiaAhmBomAAagslgqH9NTJ/Rjf7/PqcPURm9NTAJuVfhll12I9GGlu2YE6GrRgCllIGXN9mqxGSRYW0p34jmoFPqiJdHqaMHNWI7jT4VPtjdz9As9F7eLekFz6Uy5Q87gKEqCXUFcBqeSe3NFwjB0HzhBqjsPnzKu4CqSff2+gts5URwwnDgFSVYVTtvt09s3Z6G8eIt12LqEzSUlbddbetsUbQi/LHUW9FWrPkt1pnLw47Js4bwwU8w0+NaNXO6CYdeRAULB8dD1uWD2cs1d9vBPeS/w2I03k3g3I6bXKcfIYQQQgghhBBCCJ5f4c1caNezZNkAAAAASUVORK5CYII=">
        </button>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
    import ProfileLogo from './ProfileLogo.vue';
    import { useUsersStore } from '@/stores/users';

    const usersStore = useUsersStore()
    const {firstName, lastName, alias, cvu} = usersStore.getUserLoggedIn()
    const name = `${firstName} ${lastName}`

    const props = defineProps({
        showInfoPopup: {
            type: Boolean,
            required: true,
        },
    });


    const emit = defineEmits();

    const closeDialog = () => {
      emit('update:showInfoPopup', false);
    };

    const updateShowPopup = (value) => {
      emit('update:showInfoPopup', value);
    };

    const dummyCVU = '33333333333333333333'; //@TODO: Ver por qué con ref no funca
    const dummyAlias = 'FernandoAlonso';
    const copyCvu = () => {
        navigator.clipboard.writeText(dummyCVU);
    };

    const copyAlias = () => {
        navigator.clipboard.writeText(dummyAlias);
    };
</script>

<style scoped>
    .popUpContainer {
      max-width:700px;
      transition: opacity 0.5s 0.2s;
    }

    .popup-card {
      display: flex;
      justify-content: center;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.12);
      background-color: white;
      height: 450px;
      width: 700px;
    }

    .infoCard {
      flex: 0 0 60%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.12);
      background-color: white;
      padding: 10px;
      margin-right: 10px;
      margin-left: 50px;

    }

    .copyableText {
      color: grey;
      text-align: left;
      font-size: 16px;
      word-break: break-all;
    }

    .cardTitle {
      color: #6B4EFF;

    }

    .cardText {
      color: rgba(0, 0, 0, 0.6);
    }

    .profileDisplay {
      margin: 20px;
    }

    .infoText {
      color: #6B4EFF;
      margin-left: 50px;
    }

    .cvu-container {
        display: flex; /* Flexbox para alinear elementos en fila */
        align-items: center; /* Alinear verticalmente en el centro */
        margin-top: 8px; /* Margen superior para el contenedor */
        margin-bottom: 25px;
    }

    .copyButton {
      flex: 0 0 20%;
    }

    .copyImage {
      width: 30px;
      height: 30px;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

</style>
