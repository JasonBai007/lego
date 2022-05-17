<template>
  <div class="center-area">
    <!-- 表单     -->
    <el-form :size="formConfig.form.size" :label-position="formConfig.form.labelPosition" :label-width="formConfig.form.labelWidth + 'px'">
      <!-- 可拖动区域 -->
      <drag-section class="drag-section" v-model="formConfig.list" group="common" chosenClass="active" animation="200">
        <!-- 循环item -->
        <div v-for="(item, i) in formConfig.list" :key="i" class="formItem" @click="selectOne(item, i)">
          <!-- 构造每一个不同的表单元素 -->
          <form-item :item="item" />
        </div>
      </drag-section>
    </el-form>
  </div>
</template>

<script>
import DragSection from "vuedraggable";
import FormItem from "./FormItem.vue";
export default {
  name: "centerCanvas",
  components: {
    DragSection,
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
    };
  },
  computed: {},
  mounted() {},
  methods: {
    selectOne(item, i) {
      this.curIndex = i;
      this.$bus.$emit("setCurItem", item);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.center-area {
  .drag-section {
    min-height: 200px;
  }
}
</style>
