<template>
  <div class="item">
    <template v-if="data.type === 'button'">
      <el-button>按钮</el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: "formItem",
  props: ["data"],
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
.item {
}
</style>
