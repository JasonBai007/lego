<template>
  <div class="center-area">
    <!-- 表单     -->
    <el-form :size="formConfig.form.size" :label-position="formConfig.form.labelPosition" :label-width="formConfig.form.labelWidth + 'px'">
      <!-- 可拖动区域 -->
      <draggable class="drag-section" v-model="formConfig.list" group="common" chosenClass="active" animation="200">
        <!-- 循环item，并选择某个item -->
        <div v-for="(item, i) in formConfig.list" :key="i" :class="[curId == item.id ? 'chosen' : '', 'formItem']" @click="selectItem(item)">
          <!-- 构造每一个不同的表单元素 -->
          <form-item :item="item" ref="formItem" />
          <!-- 删除图标 -->
          <i class="el-icon-delete" v-show="curId == item.id" @click="deleteItem(item, i)"></i>
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
    };
  },
  computed: {
    curId() {
      return this.$store.state.curId;
    },
  },
  mounted() {},
  methods: {
    selectItem(item) {
      this.$store.commit("setCurId", item.id);
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
        console.log(JSON.stringify(n, null, 2));
        if (n.length === 0) this.$bus.$emit("isEmpty", n.length === 0);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.center-area {
  min-height: 100%;
  .drag-section {
    min-height: 200px;
    .formItem {
      position: relative;
      cursor: pointer;
      padding: 5px;
      margin: 5px;
      i.el-icon-delete {
        position: absolute;
        right: 5px;
        top: 5px;
        color: #34495e;
        &:hover {
          color: #f56c6c;
        }
      }
    }
    .chosen {
      border: 2px dashed #16a085;
    }
  }
}
</style>
