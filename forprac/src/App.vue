<template>
  <div id="app">
    <Header />
    <Form @new-todo="addTodo" @filter-complete="filterComplete" />
    <List
      :todos="filterdTodos"
      @complete-todo="completeTodo"
      @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Form,
    List,
    Header,
  },
  data() {
    return {
      todos: [],
      filterdTodos: [],
    };
  },

  methods: {
    //~ add todo items
    addTodo(newTodo) {
      // let length = this.todos.length;
      // this.$set(this.todos, length, newTodo);
      this.todos.push(newTodo);
    },
    //~ mark the todo completed
    completeTodo(todoId) {
      this.todos.forEach((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
      });
    },
    //~ remove the todo item
    removeTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
      this.filterdTodos = this.todos;
      // const item = this.todos.find((todo) => todo.id === todoId);
      // this.todos.splice(this.todos.indexOf(item.content), 1);
    },
    //~ filter todo item by chosen option
    filterComplete(selected) {
      switch (selected) {
        case "all":
          this.filterdTodos = this.todos;
          break;
        case "completed":
          this.filterdTodos = this.todos.filter(
            (todo) => todo.completed === true
          );
          break;
        case "uncompleted":
          this.filterdTodos = this.todos.filter(
            (todo) => todo.completed === false
          );
          break;
        default:
          this.filterdTodos = this.todos;
          break;
      }
    },
    //~ load todo list from localStorage
    localRead() {
      const item = JSON.parse(localStorage.getItem("localtodo"));
      if (!item) {
        localStorage.setItem("localtodo", []);
      } else {
        this.todos = item;
      }
    },
  },
  created() {
    //~ everytime the app started, check the localStorage to load exsited todo list
    this.localRead();
  },
  //~ watch the change of todos, once the todos changed, save the todos to localStorage
  watch: {
    todos: (todos) => {
      localStorage.setItem("localtodo", JSON.stringify(todos));
    },
  },
};
</script>

<style>
#app {
  width: 60%;
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
</style>
