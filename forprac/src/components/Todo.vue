<template>
  <div>
    <li>
      <span :class="{ completedTodo: todo.completed }">{{ todo.content }}</span>
      <button class="btn-check" @click="$emit('complete-todo', todo.id)">
        <i class="fa fa-check"></i>
      </button>
      <button class="btn-trash" @click="$emit('remove-todo', todo.id)">
        <i class="fa fa-trash"></i>
      </button>
    </li>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    //~there is two method emit the event, one is emit by inline atrribute, one is by componet methods.
    //~ And while inline emiting, it requires the symbol - to connect name of event, and in methods it require camel way
    // checkTodo() {
    //   this.$emit("completeTodo", this.todo.id);
    // },
    // trashTodo() {
    //   this.$emit("removeTodo", this.todo.id);
    // },
  },
};
</script>

<style scoped>
li {
  display: flex;
  padding: 6px 20px;
  width: 100%;
  background: rgb(165, 151, 151);
  align-items: center;
  border-bottom: 1px dotted black;
  border-radius: 5px;
}
span {
  flex: 16;
}
button {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
}
.btn-check {
  background: #3e803e;
}
.btn-trash {
  background: #d13636;
}
.completedTodo {
  text-decoration: line-through;
}
</style>
