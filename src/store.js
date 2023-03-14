import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    setValue(state, value) {
      state.counter = value;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    reset(context) {
      context.commit("reset");
    },
    setValue(context, value) {
      context.commit("setValue", value);
    },
  },
  getters: {
    counter: (state) => state.counter,
  },
});

export default store;
