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
          <el-form-item v-if="optsKey === 'cols'" label="布局">
            <el-input v-model="curItem.options.cols" clearable @change="setItemChildren"></el-input>
          </el-form-item>
          <el-form-item v-if="optsKey === 'gutter'" label="间距">
            <el-input v-model="curItem.options.gutter" clearable></el-input>
          </el-form-item>
          <el-form-item v-if="optsKey === 'isCenter'" label="内容居中">
            <el-switch v-model="curItem.options.isCenter" active-color="#42bc9c" inactive-color="#bec3c7"> </el-switch>
          </el-form-item>
          <el-form-item v-if="optsKey === 'justify'" label="水平对齐">
            <el-select v-model="curItem.options.justify" style="width: 100%">
              <el-option label="start" value="start"> </el-option>
              <el-option label="end" value="end"> </el-option>
              <el-option label="center" value="center"> </el-option>
              <el-option label="space-around" value="space-around"> </el-option>
              <el-option label="space-between" value="space-between"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="optsKey === 'align'" label="垂直对齐">
            <el-select v-model="curItem.options.align" style="width: 100%">
              <el-option label="stretch" value="stretch"> </el-option>
              <el-option label="top" value="top"> </el-option>
              <el-option label="middle" value="middle"> </el-option>
              <el-option label="bottom" value="bottom"> </el-option>
            </el-select>
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
  computed: {
    isEmpty() {
      return this.$store.getters.isEmpty;
    },
  },
  mounted() {
    this.$bus.$on("setCurItem", (item) => {
      // 这里传递的实际上是引用，是指针，牵线搭桥
      this.curItem = item;
    });
  },
  methods: {
    setItemChildren(str) {
      this.curItem.children = Array.from({ length: str.split(":").length }).map((u) => []);
    },
  },
  watch: {
    isEmpty(n, o) {
      // 这里必须使用，要不然不管用
      if (n) this.curItem = {};
    },
  },
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
