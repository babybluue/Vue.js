<template>
  <div class="top">
    <form @submit.prevent="addTodo">
      <input
        type="text"
        name="input"
        v-model="input_todo"
        autocomplete="off"
        placeholder="Add todo..."
      />
      <button type="submit">
        <i class="fa fa-plus-square" aria-hidden="true"></i>
      </button>
    </form>
    <select
      name="filter"
      v-model="selected"
      @change="$emit('filter-complete', selected)"
    >
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="uncompleted">uncompleted</option>
    </select>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
export default {
  name: "Form",
  data() {
    return {
      input_todo: "",
      selected: "all",
    };
  },
  created() {
    this.$emit("filter-complete", this.selected);
  },
  methods: {
    //~ emit the event to upper case
    addTodo() {
      const newTodo = {
        id: uuid(),
        content: this.input_todo,
        completed: false,
      };
      this.$emit("new-todo", newTodo);
      this.input_todo = "";
    },
  },
};
</script>

<style scoped>
.top {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
select {
  height: 30px;
}
input {
  padding: 5px;
  height: 30px;
  width: 70%;
  margin: 10px 20px;
}
button {
  height: 30px;
  width: 30px;
  background: rgb(41, 153, 41);
  border: none;
  cursor: pointer;
}
</style>
