<template>
  <div class="center-area">
    <draggable tag="ul" v-model="comList" group="common" chosenClass="active" animation="200">
      <li v-for="com in comList" :key="com.order">
        {{ com.name }}
      </li>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
const coms = ["vue.draggable", "draggable", "component", "for", "vue.js 2.0", "based", "on", "Sortablejs"];
export default {
  name: "centerCanvas",
  components: {
    Draggable,
  },
  data() {
    return {
      comList: coms.map((name, index) => {
        return { name, order: index + 1 };
      }),
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.center-area {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      cursor: move;
      height: 30px;
      line-height: 30px;
      border: 1px solid #ccc;
      padding: 5px 0 5px 15px;
      margin-bottom: 5px;
    }
  }
}
</style>
