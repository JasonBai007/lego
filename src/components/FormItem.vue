<template>
  <div class="oneItem">
    <!-- 如果类型是按钮 -->
    <!-- <el-form-item v-if="item.type === 'button'"> -->
    <el-button :type="item.options.type" :icon="item.options.icon" v-if="item.type === 'button'">{{ item.options.label }}</el-button>
    <!-- </el-form-item> -->
    <!-- 如果类型是输入框 -->
    <el-form-item v-if="item.type === 'input'" :label="item.options.label">
      <el-input :placeholder="item.options.placeholder"></el-input>
    </el-form-item>
    <!-- 如果类型是容器，这里就需要递归了！！！ -->
    <el-row v-if="item.type === 'container'">
      <el-col :span="Number(col)" v-for="(col, i) in item.options.cols.split(':')" :key="i">
        <!-- 绑定children对于的数组数据 -->
        <draggable v-model="item.children[i]" group="common" animation="200">
          <!-- 递归判断条件，如果容器里没有元素，就不用继续递归了！！！ -->
          <template v-if="item.children[i].lenght > 0">
            <div v-for="(child, j) in item.children[i]" :key="j">
              <form-item :item="child"></form-item>
            </div>
          </template>
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "form-item",
  props: ["item"],
  components: {
    draggable,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.oneItem {
  .el-row {
    .el-col > div {
      min-height: 40px;
      border: 1px dashed #aaa;
    }
  }
}
</style>
