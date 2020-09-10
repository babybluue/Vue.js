<template>
  <div id="app">
    <Header />
    <Form />
    <List />
  </div>
</template>

<script>
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Form,
    List,
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: cadetblue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
