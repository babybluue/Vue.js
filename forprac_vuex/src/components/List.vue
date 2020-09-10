<template>
  <div class="todo-list">
    <div
      class="todo"
      v-for="todo in filterTodos"
      :key="todo.id"
      @click="completedTodos(todo.id)"
      :class="{ 'is-completed': todo.completed }"
    >
      {{ todo.content }}
      <i class="fa fa-trash" @click.stop="removeTodos(todo.id)"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "List",
  //~getters should use computed
  computed: mapGetters(["filterTodos", "allTodos"]),
  methods: {
    ...mapActions(["completedTodos", "removeTodos", "getTodos", "saveTodos"]),
  },
  //~ watch the changes of state and anytime could save the changed state to localstorage
  watch: {
    allTodos: function() {
      this.saveTodos();
    },
  },
  //~ get todos from localstorage
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
.todo-list {
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5rem;
}
.todo {
  background: #7777bb;
  height: 80px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  position: relative;
}
.todo.is-completed {
  background: #245a5a;
}
i {
  position: absolute;
  bottom: 2px;
  right: 4px;
  cursor: pointer;
  background: transparent;
}
@media (max-width: 800px) {
  .todo-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 440px) {
  .todo-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
