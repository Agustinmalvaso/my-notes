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

async function registerUser() {
  try {
    const response = await axios.post("http://my-notes-backend.test/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    });
    console.log("Registration successful:", response.data);
  } catch (error) {
    console.error("There was an error!", error.response.data);
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Card class="w-[350px] login-container">
      <CardHeader>
        <CardTitle class="flex justify-center login-title">Sign Up</CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-y-4">
        <form
          @submit.prevent="registerUser"
          class="flex flex-col items-center w-full gap-4"
        >
          <div class="flex flex-col items-center w-full gap-4">
            <Input v-model="name" id="name" placeholder="Name" />
            <Input
              v-model="email"
              id="email"
              placeholder="Email"
              type="email"
            />
            <Input
              v-model="password"
              id="password"
              placeholder="Password"
              type="password"
            />
            <Input
              v-model="passwordConfirmation"
              id="password_confirmation"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <CardFooter class="flex justify-center">
            <Button class="w-full login-button" type="submit">Register</Button>
          </CardFooter>
        </form>
      </CardContent>
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
