import { defineStore } from 'pinia';

// 在 pinia 中 state、actions、getters
// 對應原本的 data、methods、computed

export default defineStore('userStore', {
  state: () => ({
    name: '小美',
    wallet: 300,
  }),
  getters: {
    getUserName: (state) => `我的名字叫做 ${state.name}`,
  },
  actions: {
    // 此處使用傳統函式以便使用 this
    updateName() {
      this.name = '直接';
    },
    updateNameIndividual() {
      this.name = '解構';
    },
  },
});
