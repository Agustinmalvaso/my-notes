<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div
    class="navbar-container w-full h-[10vh] bg-cyan-950 flex flex-row justify-between items-center p-4 shadow-navbar"
  >
    <Sheet>
      <SheetTrigger class="text-white font-mono text-xl"
        >Manage my notes</SheetTrigger
      >
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    <button @click="console.log('click!')">
      <Avatar>
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback class="text-white">Avatar</AvatarFallback>
      </Avatar>
    </button>
  </div>
</template>

<style scoped>
.navbar-container {
  position: relative; /* Necesario para que la sombra se aplique correctamente en relación al contenedor */
  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.2),
    0 4px 8px -4px rgba(0, 0, 0, 0.2); /* Sombra más intensa */
}
</style>
