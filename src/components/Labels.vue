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
      labelList: [
        {
          name: "Container",
          type: "layout",
          order: Date.now(),
          options: {
            layout: [24],
          },
        },
        {
          name: "Input",
          type: "input",
          order: Date.now(),
          options: {
            label: "标签",
            placeholder: "请输入",
          },
        },
        {
          name: "Button",
          type: "button",
          order: Date.now(),
          options: {
            label: "按钮",
            icon: "",
          },
        },
      ],
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
