import { defineStore } from 'pinia';
import axios from 'axios';

// 在 pinia 中 state、actions、getters
// 對應原本的 data、methods、computed

export default defineStore('todosStore', {
  state: () => ({
    todos: [],
    status: 'all',
    apiUrl: `${process.env.VUE_APP_API_URL}/todos`,
    // apiUrl: 'https://jsonplaceholder.typicode.com/todos',
    updateStatusTodo: Boolean,
  }),
  getters: {
    getUserName: (state) => `我的名字叫做 ${state.apiUrl}`,
  },
  actions: {
    async fetchTodos(url) {
      try {
        const response = await axios.get(url);
        this.todos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    changeStatus(payload) {
      this.status = payload;
      let url = this.apiUrl;
      if (payload && payload === 'completed') {
        url += '?completed=true';
      } else if (payload && payload === 'inCompleted') {
        url += '?completed=false';
      }
      this.fetchTodos(url);
    },
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
    async addTodo(title) {
      const response = await axios.post(this.apiUrl, {
        title,
        completed: false,
      });
      this.todos.unshift(response.data);
    },
    async deleteTodo(index) {
      // console.log(index);
      await axios.delete(`${this.apiUrl}/${index}`);
      this.todos = this.todos.filter((todo) => (todo.id !== index));
    },
    async updateTodo(payload) {
      const response = await axios.put(`${this.apiUrl}/${payload.id}`, payload);
      this.todos = this.todos.map((todo) => (todo.id === response.data.id ? response.data : todo));
    },
    async limitTodo(e) {
      let url = `${this.apiUrl}?_limit=${e.target.value}`;
      if (this.status === 'completed') {
        url += '&completed=true';
      } else if (this.status === 'inCompleted') {
        url += '&completed=false';
      }
      const response = await axios.get(url);
      this.todos = response.data;
    },
  },
});
