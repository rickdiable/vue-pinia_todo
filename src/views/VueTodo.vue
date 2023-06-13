<template>
  <div class="container">
    <TodoList></TodoList>
  </div>
</template>

<script>
// import StatusNav from "@/components/StatusNav.vue";
import { ref, onMounted } from 'vue';
import axios from 'axios';

import TodoList from '@/components/TodoList.vue';

export default {
  name: 'VueTodo',
  components: {
    TodoList,
  },

  setup() {
    const number = 123;

    const data = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');
        data.value = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    });

    return {
      number,
    };
  },
};

</script>

<style>

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
