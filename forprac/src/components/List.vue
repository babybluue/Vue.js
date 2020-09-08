<template>
  <div>
    <ul v-for="todo in todos" :key="todo.id">
      <Todo
        :todo="todo"
        @complete-todo="$emit('complete-todo', todo.id)"
        @remove-todo="$emit('remove-todo', todo.id)"
      />
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "List",
  components: {
    Todo,
  },
  props: ["todos"],
};
</script>
