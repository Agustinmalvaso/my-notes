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
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Card class="w-[350px] login-container">
      <CardHeader>
        <CardTitle class="flex justify-center login-title">Sign in</CardTitle>
        <CardDescription class="flex items-center gap-1"
          >Don't have an account yet?
          <button
            class="flex underline text-sky-400 hover:text-sky-600 bg-transparent p-0"
          >
            Sign Up
          </button></CardDescription
        >
      </CardHeader>
      <CardContent class="flex flex-col gap-y-4">
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="email" placeholder="Email" />
            </div>
          </div>
        </form>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-center">
        <Button class="w-full login-button">Login</Button>
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
