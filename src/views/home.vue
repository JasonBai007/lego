<template>
  <div class="home">
    <section class="main">
      <drag-area></drag-area>
    </section>
    <section class="right">
      <config-area></config-area>
    </section>
  </div>
</template>

<script>
import DragArea from "@/components/DragArea.vue";
import ConfigArea from "@/components/ConfigArea.vue";

export default {
  name: "home",
  components: {
    DragArea,
    ConfigArea,
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  & > section {
    box-sizing: border-box;
    height: 100vh;
    padding: 15px;
  }
  .main {
    flex-grow: 1;
    background: #efefef;
  }
  .right {
    width: 300px;
    border-left: 1px solid #ccc;
  }
}
</style>
