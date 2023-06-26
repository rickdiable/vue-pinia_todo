<template>
  <div class="container">
    <StatusNav></StatusNav>
    <AddTodo></AddTodo>
    <FilterTodo></FilterTodo>
    <TodoList></TodoList>
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import StatusNav from '@/components/StatusNav.vue';
import FilterTodo from '@/components/FilterTodo.vue';

export default {
  name: 'VueTodo',
  components: {
    TodoList,
    AddTodo,
    StatusNav,
    FilterTodo,
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
