<template>
  <div class="labes">
    <!-- 配置项：自身不能排序，不能放置拖拽元素，拖拽时克隆 -->
    <draggable tag="ul" v-model="labelList" :group="{ name: 'common', pull: 'clone', put: false }" :sort="false">
      <li v-for="(label, i) in labelList" :key="i">
        {{ label.name }}
      </li>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
const labels = ["Container", "Input", "Button"];
export default {
  name: "labes",
  components: {
    Draggable,
  },
  data() {
    return {
      labelList: labels.map((name, index) => {
        return { name, order: index + 10 };
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
.labes {
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      width: 120px;
      height: 120px;
      flex-shrink: 0;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #aaa;
      &:hover {
        cursor: move;
      }
    }
  }
}
</style>
