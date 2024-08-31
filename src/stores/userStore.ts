import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as any | null,
  }),
  actions: {
    setUser(userData: any | null) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    },
  },
});
