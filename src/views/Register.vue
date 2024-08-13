<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const errors = ref<{ [key: string]: string[] }>({});

async function registerUser() {
  try {
    errors.value = {};
    const response = await axios.post("http://my-notes-backend.test/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    });
    console.log("Registration successful:", response.data);
  } catch (error: any) {
    if (error.response && error.response.data.errors) {
      errors.value = error.response.data.errors;
    } else {
      console.error("There was an error!", error);
    }
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Card class="w-[350px] register-container">
      <CardHeader>
        <CardTitle class="flex justify-center register-title"
          >Sign Up</CardTitle
        >
      </CardHeader>
      <CardContent class="flex flex-col gap-y-4">
        <form
          @submit.prevent="registerUser"
          class="flex flex-col items-center w-full gap-4"
        >
          <div class="flex flex-col items-center w-full gap-4">
            <Input v-model="name" id="name" placeholder="Name" />
            <div v-if="errors.name" class="text-red-500 text-sm">
              {{ errors.name[0] }}
            </div>
            <Input
              v-model="email"
              id="email"
              placeholder="Email"
              type="email"
            />
            <div v-if="errors.email" class="text-red-500 text-sm">
              {{ errors.email[0] }}
            </div>
            <Input
              v-model="password"
              id="password"
              placeholder="Password"
              type="password"
            />
            <div v-if="errors.password" class="text-red-500 text-sm">
              {{ errors.password[0] }}
            </div>
            <Input
              v-model="passwordConfirmation"
              id="password_confirmation"
              placeholder="Confirm Password"
              type="password"
            />
            <div
              v-if="errors.password_confirmation"
              class="text-red-500 text-sm"
            >
              {{ errors.password_confirmation[0] }}
            </div>
          </div>
          <CardFooter class="flex justify-center flex-col gap-2">
            <Button class="w-full register-button" type="submit"
              >Register</Button
            >
            <div class="flex flex-row gap-1">
              <p class="text-white">Already have an account?</p>
              <router-link
                to="/"
                class="flex underline text-sky-400 hover:text-sky-600 bg-transparent p-0"
                >Login</router-link
              >
            </div>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<style>
.register-container {
  background: linear-gradient(135deg, #0e435c, #010425);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.register-button {
  background-color: #142b46 !important;
  border-color: white !important;
}
.register-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}
.register-button:hover {
  background: #183d53 !important;
}
</style>
