<template>
  <div class="counter">
    <h1>{{ counter }}</h1>
    <!-- <p>Counter</p> -->
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">RESET</button>
    </div>

    <input type="number" v-model="value" @input="setValue(value)" />
  </div>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  // inject: ['store'], // inject the store dependency
  setup() {
    const { counter, increment, decrement, reset, setValue } = useCounter();

    return {
      counter,
      increment,
      decrement,
      reset,
      setValue,
      value: counter.value,
    };
  },
};
</script>
<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
}
p {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 2rem;
}
.buttons {
  margin: 5rem;
  margin-bottom: 2rem;
}
button {
  padding: 8px 15px;
  margin: 0 10px;
  border: 4px solid #ff323f;
  border-radius: 10px;
  background-color: white;
  color: #ff323f;
  font-weight: bolder;
  cursor: pointer;
}
input {
  padding: 8px 15px;
  margin: 0 10px;
  border: 3px solid #ff323f;
  border-radius: 5px;
  background-color: white;
  width: 11rem;
}
</style>
