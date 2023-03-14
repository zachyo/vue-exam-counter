<template>
  <div>
    <h1>ERROR 404</h1>
    <h1>PAGE NOT FOUND</h1>
  </div>
  <div>CLICK  <span style="font-style: italic;"><RouterLink to="/">here</RouterLink></span> TO GO HOME</div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
h1 {
  display: block;
  font-size: 4rem;
}
div {
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.6rem;
  margin-top: 4rem;
}
</style>
