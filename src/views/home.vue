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
  flex-wrap: wrap;
  & > section {
    box-sizing: border-box;
    height: 100vh;
    padding: 15px;
  }
  .main {
    flex-grow: 1;
    background: #ecf0f1;
  }
  .right {
    width: 300px;
    border-left: 1px solid #ccc;
  }
}

@media screen and (max-width: 1024px) {
  .home {
    .right {
      width: 0;
      padding: 0;
    }
  }
}
</style>
