<script setup lang="ts">
import NavBar from "../util-components/NavBar.vue";
import { useUserStore } from "@/stores/userStore";
import { computed } from "vue";

const userStore = useUserStore();
const user = computed(() => userStore.getUser);
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <NavBar />
    <p class="text-white text-5xl flex justify-center font-mono">
      Hello {{ user.name }}!
    </p>
    <p class="text-white text-5xl flex justify-center font-mono">
      Want to write that down?
    </p>
  </div>
</template>
