<template>
  <div class="oneItem">
    <!-- 如果类型是按钮 -->
    <el-form-item v-if="item.type === 'button'">
      <el-button :type="item.options.type" :icon="item.options.icon">{{ item.options.label }}</el-button>
    </el-form-item>
    <!-- 如果类型是输入框 -->
    <el-form-item v-if="item.type === 'input'" :label="item.options.label">
      <el-input :placeholder="item.options.placeholder"></el-input>
    </el-form-item>
    <!-- 如果类型是容器 -->
    <el-row v-if="item.type === 'layout'">
      <el-col :span="col" v-for="(col, i) in item.options.cols.split(':')" :key="i">容器</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "formItem",
  props: ["item"],
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
}
</style>
