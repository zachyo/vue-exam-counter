<template>
  <header>
    <router-link to="/">HOME</router-link>
    <router-link to="/counter">COUNTER</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import store from "./store.js";

export default {
  name: "App",
  provide: {
    store, // make the store available to all child components
  },
};
</script>

<style>
html {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  height: 95.1vh;
  background-image: url(../assets/counter\ bckg.jpg);
  background-size: cover;
  /* background-color: black; */
}
header {
  display: flex;
  justify-content: space-between;
  margin: 0 11rem;
}
a {
  color: white;
  text-decoration: none;
  border-bottom: 4px solid white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.6rem;
  transition: .2s all;

}
a:hover {
  transform: translateX(8px);
  border-bottom: 4px solid #ff323f;
}
@media (max-width : 768px) {
  header {
    margin: 1rem;
  }
}
</style>
