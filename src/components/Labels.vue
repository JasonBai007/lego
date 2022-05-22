<template>
  <div class="labes">
    <!-- 配置项：自身不能排序，不能放置拖拽元素，拖拽时克隆 -->
    <!-- 重点一：必须:clone，不能是@clone -->
    <draggable tag="ul" v-model="labelList" :group="{ name: 'common', pull: 'clone', put: false }" :sort="false" :clone="cloneCur">
      <li v-for="(label, i) in labelList" :key="i">
        {{ label.name }}
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "labes",
  components: {
    draggable,
  },
  data() {
    return {
      labelList: [
        {
          name: "Container",
          type: "container",
          id: 1,
          children: [[], []], // 和下方的cols一一对应
          options: {
            cols: "12:12",
            gutter: 0,
            justify: "center", // start/end/center/space-around/space-between
            align: "stretch", // stretch/top/middle/bottom
            isCenter: false, // 内容是否居中
          },
        },
        {
          name: "Input",
          type: "input",
          id: 2,
          options: {
            label: "标签",
            placeholder: "请输入",
          },
        },
        {
          name: "Button",
          type: "button",
          id: 3,
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
      let item_copy = JSON.parse(JSON.stringify(item));
      // 每次拖拽出来的id都不一样
      item_copy.id = Date.now().toString(36);
      return item_copy;
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
      border: 2px solid #bdc3c7;
      font-size: 13px;
      transition: box-shadow 0.2s;
      border-radius: 3px;
      user-select: none;
      &:hover {
        box-shadow: 5px 5px 5px #ccc;
        border-color: #16a085;
        cursor: move;
      }
    }
  }
}
</style>
