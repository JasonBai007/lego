<template>
  <div class="config-area">
    <template v-if="curItem.options">
      <el-form ref="form" :model="curItem.options" size="small" label-position="top">
        <div class="set" v-for="(optsVal, optsKey) in curItem.options" :key="optsKey">
          <el-form-item v-if="optsKey === 'label'" label="标签">
            <el-input v-model="curItem.options.label" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="optsKey === 'placeholder'" label="Placeholder">
            <el-input v-model="curItem.options.placeholder" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="optsKey === 'icon'" label="图标">
            <el-input v-model="curItem.options.icon" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="optsKey === 'type'" label="类型">
            <el-radio-group v-model="curItem.options.type">
              <el-radio label="">normal</el-radio>
              <el-radio label="primary"></el-radio>
              <el-radio label="success"></el-radio>
              <el-radio label="info"></el-radio>
              <el-radio label="warning"></el-radio>
              <el-radio label="danger"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  name: "configArea",
  data() {
    return {
      curItem: {},
    };
  },
  computed: {},
  mounted() {
    this.$bus.$on("setCurItem", (item) => {
      this.curItem = item;
    });
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.config-area {
  .el-radio {
    width: 35%;
    margin-bottom: 12px;
  }
}
</style>
