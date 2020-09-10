import { v4 as uuid } from "uuid";
//~uuid =>universal unique identifier
const state = {
  //~ todos => store todos
  todos: [],
  //~ filteroption =>  store select type -> "all" "completed" "uncompleted"
  filterOption: [],
};

const getters = {
  //~getters  describe the state (based state) and not influence original state

  //~allTodos  just for watching the changes of state to save the state to localStorage immetally...
  allTodos: (state) => state.todos,
  //~ show the data to front interface
  filterTodos: (state) => {
    switch (state.filterOption[0]) {
      case "completed":
        return state.todos.filter((todo) => todo.completed);
      case "uncompleted":
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  },
};

const actions = {
  //~ get todos from localStorage when app created
  getTodos: ({ commit }) => {
    const getLocal = JSON.parse(localStorage.getItem("localtodo"));
    let localTodos = [];
    if (getLocal !== null) {
      localTodos = getLocal;
    } else {
      return;
    }
    commit("getTodo", localTodos);
  },
  //~ save todos to localStorage whenever the state changes
  saveTodos: ({ commit }) => {
    commit("saveTodo");
  },
  //~add
  addTodos: ({ commit }, content) => {
    const newTodo = {
      content,
      id: uuid(),
      completed: false,
    };
    commit("newTodo", newTodo);
  },
  //~check
  completedTodos: ({ commit }, id) => {
    commit("completedTodo", id);
  },
  //~delete
  removeTodos: ({ commit }, id) => {
    commit("removeTodo", id);
  },
  //~filter check
  filterTodos: ({ commit }, selected) => {
    commit("filterTodo", selected);
    console.log(selected);
  },
};

const mutations = {
  getTodo: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  //!highlight
  completedTodo: (state, id) => {
    const index = state.todos.findIndex((todo) => todo.id === id);
    const item = state.todos.find((todo) => todo.id === id);
    const newItem = {
      content: item.content,
      id: item.id,
      completed: !item.completed,
    };
    //~for vue could watch the changes of array inner property change by splice
    state.todos.splice(index, 1, newItem);
  },

  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  filterTodo: (state, selected) => {
    state.filterOption = [];
    state.filterOption.push(selected);
  },
  saveTodo: (state) =>
    localStorage.setItem("localtodo", JSON.stringify(state.todos)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
