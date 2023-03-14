import { computed } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  //recheck this line below
  const counter = computed(() => store.state.counter);

  const increment = () => {
    store.dispatch("increment");
  };

  const decrement = () => {
    store.dispatch("decrement");
  };

  const reset = () => {
    store.dispatch("reset");
  };

  const setValue = (value) => {
    store.dispatch("setValue", value);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    setValue,
  };
}
