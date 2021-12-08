import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, newTodoItem) {
      const obj = {
        completed: false,
        item: newTodoItem,
      };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, paylaod) {
      localStorage.removeItem(paylaod.todoItem.item);
      state.todoItems.splice(paylaod.index, 1);
    },
    toggleOneItem(state, paylaod) {
      state.todoItems[paylaod.index].completed = !state.todoItems[paylaod.index].completed;
      localStorage.removeItem(paylaod.todoItem.item);
      localStorage.setItem(paylaod.todoItem.item, JSON.stringify(paylaod.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
  actions: {},
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
});
