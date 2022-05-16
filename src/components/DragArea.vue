<template>
  <div class="drag-area">
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<script>
export default {
  name: "dragArea",
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
.drag-area {
  display: flex;
  height: 100%;
  & > div {
    padding: 10px;
    border: 1px solid #ccc;
  }
  .left {
    width: 280px;
    margin-right: 15px;
  }
  .right {
    flex-grow: 1;
  }
}
</style>
