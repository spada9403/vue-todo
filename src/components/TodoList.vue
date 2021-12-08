<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" :class="{ checkBtnCompleted: todoItem.completed }" @click="toggleComplete({ todoItem, index })"></i>
        <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations /*mapState */ } from "vuex";

export default {
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },
    ...mapGetters(["storedTodoItems"]),
    // ...mapState(["todoItems"]),
  },
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
    // removeTodo(todoItem, index) {
    //   // this.$emit("removeItem", todoItem, index);
    //   this.$store.commit("removeOneItem", {
    //     todoItem,
    //     index,
    //   });
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit("toggleItem", todoItem, index);
    //   this.$store.commit("toggleOneItem", {
    //     todoItem,
    //     index,
    //   });
    // },
  },
};
</script>

<style scope>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
