<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in todos"
        :key="todo.id"
        class="todo"
        v-bind:class="{'is-complete':todo.completed}"
      >
        {{ todo.title }}
        <button type="button" class="btn btn-warning" @click="deleteTodo(todo.id)"> X </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import todoStore from '@/stores/todos';

export default {
  setup() {
    // store 實例
    const todoList = todoStore();

    // state (使用 storeToRefs 解構取值時資料保持響應性)
    // ref 必須加上 .value 才能正確取到值
    const { todos, apiUrl } = storeToRefs(todoList);

    // action (方法通常不須響應性 直接從實例取出即可)
    const { fetchTodos, onDblClick, deleteTodo } = todoList;

    onMounted(async () => {
      await fetchTodos(apiUrl.value);
    });

    return {
      todos,
      onDblClick,
      deleteTodo,
    };
  },
};

</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

.btn {
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 3px 7px;
  border: none;
  -webkit-border-radius: 2px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 2px;
  -moz-background-clip: padding;
  border-radius: 2px;
  background-clip: padding-box;
  transition: color 0.2s linear, background-color 0.2s linear;
}

.btn-warning {
  background-color: rgb(167, 9, 9);
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
