<template>
  <div>
    <form @submit.prevent="addTodo(content)">
      <input type="text" placeholder="Add Todo..." v-model="content" />
      <input type="submit" value="Submit" />
      <select @change="filterTodos(selected)" v-model="selected">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncomplted</option>
      </select>

      <p>Click the item to complete</p>
      <div class="intro">
        <span><span class="completed"></span>=compelted</span>
        <span><span class="uncompleted"></span>=uncompleted</span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  methods: {
    ...mapActions(["addTodos", "filterTodos"]),
    addTodo(content) {
      this.addTodos(content);
      this.content = "";
    },
  },
  data() {
    return {
      content: "",
      selected: "all",
    };
  },
};
</script>

<style scoped>
form {
  width: 60%;
  margin: auto;
}
input[type="text"] {
  height: 30px;
  margin: 0 10px;
  background: wheat;
  border-radius: 5px;
  padding: 5px;
}
input[type="submit"] {
  height: 30px;
  width: 60px;
  margin: 0 10px;
  background: wheat;
  cursor: pointer;
  border: 1px solid wheate;
  border-radius: 5px;
}
select,
option {
  height: 30px;
  background: wheat;
  margin: 10px 30px;
}
.intro {
  width: 50%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
span {
  display: flex;
  align-items: center;
}
.completed {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #7777bb;
}
.uncompleted {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #245a5a;
}
</style>
