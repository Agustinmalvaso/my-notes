<script setup lang="ts">
import { ref } from "vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

const currentView = ref("register");
</script>

<template>
  <div class="w-full h-screen bg-gradient-to-br from-[#0a2641e3] to-[#010425]">
    <Login v-if="currentView === 'login'" />
    <Register v-if="currentView === 'register'" />
  </div>
</template>
