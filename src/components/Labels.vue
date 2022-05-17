<template>
  <div class="labes">
    <!-- 配置项：自身不能排序，不能放置拖拽元素，拖拽时克隆 -->
    <!-- 重点一：必须:clone，不能是@clone -->
    <drag-section tag="ul" v-model="labelList" :group="{ name: 'common', pull: 'clone', put: false }" :sort="false" :clone="cloneCur">
      <li v-for="(label, i) in labelList" :key="i">
        {{ label.name }}
      </li>
    </drag-section>
  </div>
</template>

<script>
import DragSection from "vuedraggable";
const labels = ["Container", "Input", "Button"];
export default {
  name: "labes",
  components: {
    DragSection,
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
            type: "primary",
          },
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    cloneCur(item) {
      // 重点二：必须返回一个全新的对象
      return JSON.parse(JSON.stringify(item));
    },
  },
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
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      margin: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #aaa;
      font-size: 13px;
      transition: box-shadow 0.2s;
      border-radius: 3px;
      &:hover {
        box-shadow: 5px 5px 5px #ccc;
        border-color: #16a085;
        cursor: move;
      }
    }
  }
}
</style>
