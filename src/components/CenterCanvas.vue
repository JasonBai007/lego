<template>
  <div class="center-area">
    <!-- 表单     -->
    <el-form :size="formConfig.form.size" :label-position="formConfig.form.labelPosition" :label-width="formConfig.form.labelWidth + 'px'">
      <!-- 可拖动区域 -->
      <draggable class="drag-section" v-model="formConfig.list" group="common" chosenClass="active" animation="200">
        <!-- 循环item，并选择某个item -->
        <div v-for="(item, i) in formConfig.list" :key="i" :class="[curItem.order == item.order ? 'chosen' : '', 'formItem']" @click="selectItem(item, i)">
          <!-- 构造每一个不同的表单元素 -->
          <form-item :item="item" />
          <!-- 删除图标 -->
          <i class="el-icon-delete" v-show="curItem.order == item.order" @click="deleteItem(item, i)"></i>
        </div>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FormItem from "./FormItem.vue";
export default {
  name: "centerCanvas",
  components: {
    draggable,
    FormItem,
  },
  data() {
    return {
      formConfig: {
        // 拖拽区el-form属性
        form: {
          labelWidth: 100,
          labelPosition: "top",
          size: "small",
        },
        // 拖拽区接收到的组件
        list: [],
      },
      curIndex: "",
      curItem: { name: "" },
    };
  },
  computed: {},
  mounted() {},
  methods: {
    selectItem(item, i) {
      this.curIndex = i;
      this.curItem = item;
      this.$bus.$emit("setCurItem", item);
    },
    deleteItem(item, i) {
      this.$confirm("确定删除当前控件?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.formConfig.list.splice(i, 1);
        })
        .catch(() => {});
    },
  },
  watch: {
    "formConfig.list": {
      deep: true,
      handler: function (n, o) {
        console.log(n);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.center-area {
  min-height: 100%;
  .drag-section {
    min-height: 500px;
    .formItem {
      position: relative;
      cursor: pointer;
      padding: 10px;
      i.el-icon-delete {
        position: absolute;
        right: 10px;
        top: 10px;
        &:hover {
          color: #f56c6c;
        }
      }
    }
    .chosen {
      border: 1px dashed #888;
    }
  }
}
</style>
