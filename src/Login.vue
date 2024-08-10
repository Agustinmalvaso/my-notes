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
import { Label } from "@/components/ui/label";
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Card class="w-[350px] login-container">
      <CardHeader>
        <CardTitle class="flex justify-center login-title">Sign in</CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-y-4">
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Email" />
            </div>
          </div>
        </form>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Password" />
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
.login-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}
.login-button {
  background: linear-gradient(45deg, #000000, #1057f0);
  color: #fff;
}
.login-button:hover {
  background: linear-gradient(45deg, #000000, #0b45c0);
}
</style>
