<template>
    <v-container fluid>
        <v-divider class="divider"/>
        <v-row>
            <v-col cols="12">
                <h1>{{ question }}</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="faq-answer">{{ answer }}</p>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script setup>
  const props = defineProps({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
    .divider {
        margin-bottom: 20px;
        color: black;
    }

  .faq-answer {
    font-size: 18px;
  }
  </style>