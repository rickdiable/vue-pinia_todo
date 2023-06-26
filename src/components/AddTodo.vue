<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <label for="typeTodo">
          <input id="typeTodo" type="text" v-model="title" placeholder="Add Todo...">
        </label>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { storeToRefs } from 'pinia';

import todoStore from '@/stores/todos';

export default {
  setup() {
    const title = ref('');
    const { addTodo } = todoStore();

    function onSubmit(e) {
      e.preventDefault();
      addTodo(title.value);
      title.value = '';
    }

    return {
      title,
      onSubmit,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
}

label:has(input[type="text"]) {
  flex: 10;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
