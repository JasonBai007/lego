<template>
  <div class="oneItem">
    <!-- 如果类型是按钮 -->
    <el-button v-if="item.type === 'button'" :type="item.options.type" :icon="item.options.icon" size="small">{{ item.options.label }}</el-button>

    <!-- 如果类型是输入框 -->
    <el-form-item v-if="item.type === 'input'" :label="item.options.label">
      <el-input :placeholder="item.options.placeholder"></el-input>
    </el-form-item>

    <!-- 如果类型是容器，这里就需要递归了！！！ -->
    <el-row v-if="item.type === 'container'" type="flex" :align="item.options.align" :justify="item.options.justify" :gutter="item.options.gutter">
      <!-- 构建容器的每一个col -->
      <el-col :span="Number(col)" v-for="(col, i) in item.options.cols.split(':')" :key="i">
        <!-- 绑定children对应的数组数据 -->
        <draggable v-model="item.children[i]" group="common" animation="200" class="inner">
          <!-- 递归判断条件，如果容器里没有元素，就不用继续递归了！！！ -->
          <template v-if="item.children[i].length > 0">
            <!-- 循环容器内部某个col里的组件，并绑定单击事件，还要阻止冒泡到上一级 -->
            <div v-for="(child, j) in item.children[i]" :key="j" @click.stop="selectInnerItem(child)" :class="[curInnerId == child.id ? 'chosen' : '', 'formItem']">
              <!-- 又TM渲染一遍当前的组件，因为里面可能只有一个按钮，所以，内层渲染的时候只走上面的button分支 -->
              <form-item :item="child"></form-item>
              <!-- 删除图标，删除的时候传入当前父级item，i,j -->
              <i class="el-icon-delete" v-show="curInnerId == child.id" @click="deleteInnerItem(item, i, j)"></i>
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
  computed: {
    curInnerId() {
      return this.$store.state.curId;
    },
  },
  mounted() {},
  methods: {
    selectInnerItem(child) {
      this.$store.commit("setCurId", child.id);
      this.$bus.$emit("setCurItem", child);
    },
    deleteInnerItem(item, i, j) {
      this.$confirm("确定删除当前控件?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          item.children[i].splice(j, 1);
        })
        .catch(() => {});
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.oneItem {
  .el-row {
    .el-col {
      min-height: 40px;
      border: 1px dashed #aaa;
      .inner {
        min-height: 40px;
        .formItem {
          position: relative;
          cursor: pointer;
          padding: 5px;
          margin: 5px;
          i.el-icon-delete {
            position: absolute;
            right: 5px;
            top: 5px;
            &:hover {
              color: #f56c6c;
            }
          }
        }
        .chosen {
          border: 2px dashed #16a085;
        }
      }
    }
  }
}
</style>
