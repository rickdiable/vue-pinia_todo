<template>
  <div>
    Filter Todos:
    <label for="filterSelect">
      <select id="filterSelect" @change="limitTodo">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </label>
  </div>
</template>

<script>
import todoStore from '@/stores/todos';

export default {
  setup() {
    const { limitTodo } = todoStore();

    return {
      limitTodo,
    };
  },
};
</script>

<style scoped>
  select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
