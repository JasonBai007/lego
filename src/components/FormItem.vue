<template>
  <div class="oneItem">
    <!-- 如果类型是按钮 -->
    <template v-if="item.type === 'button'">
      <el-form-item>
        <el-button :type="item.options.type" :icon="item.options.icon">{{ item.options.label }}</el-button>
      </el-form-item>
    </template>
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
