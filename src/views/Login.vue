<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loading from "../util-components/Loading.vue";
import { useUserStore } from "@/stores/userStore";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);
const userStore = useUserStore();

async function login() {
  errorMessage.value = "";
  loading.value = true;
  try {
    const response = await axios.post("http://my-notes-backend.test/login", {
      email: email.value,
      password: password.value,
    });
    console.log("Login successful");
    userStore.setUser(response.data.user);
    router.push({ path: "/Home" });
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 422) {
        errorMessage.value = "The email must be a valid email address.";
      } else if (error.response.status === 401) {
        errorMessage.value = "The email or password are incorrect.";
      }
    } else {
      console.error("There was an error!", error);
    }
    loading.value = false;
  }
}
</script>

<template>
  <Loading v-if="loading" class="flex justify-center items-center h-screen" />
  <div v-else class="flex justify-center items-center h-screen">
    <Card class="w-[350px] login-container">
      <CardHeader>
        <CardTitle class="flex justify-center login-title">Sign in</CardTitle>
        <CardDescription class="flex items-center gap-1 text-white"
          >Don't have an account yet?
          <router-link
            to="/register"
            class="flex underline text-sky-400 hover:text-sky-600 bg-transparent p-0"
          >
            Sign Up
          </router-link></CardDescription
        >
      </CardHeader>
      <CardContent class="flex flex-col gap-y-4">
        <div v-if="errorMessage" class="text-red-500 text-sm">
          {{ errorMessage }}
        </div>

        <form @submit.prevent="login">
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="email" placeholder="Email" v-model="email" />
            </div>
          </div>
          <div class="grid items-center w-full gap-4 mt-4">
            <div class="flex flex-col space-y-1.5">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-center">
        <Button class="w-full login-button" @click="login">Login</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<style>
.login-container {
  background: linear-gradient(135deg, #0e435c, #010425);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.login-button {
  background-color: #142b46 !important;
  border-color: white !important;
}
.login-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}
.login-button:hover {
  background: #183d53 !important;
}
</style>
