<template>
  <div class="drag-area">
    <div class="left">
      <labels></labels>
    </div>
    <div class="right">
      <center-canvas></center-canvas>
    </div>
  </div>
</template>

<script>
import Labels from "./Labels.vue";
import CenterCanvas from "./CenterCanvas.vue";

export default {
  name: "dragArea",
  components: {
    Labels,
    CenterCanvas,
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
.drag-area {
  display: flex;
  height: 100%;
  & > div {
    background: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .left {
    width: 280px;
    margin-right: 15px;
  }
  .right {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
  }
}
</style>
