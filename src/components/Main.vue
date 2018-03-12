<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="Calculator">
        <Calculator />
      </el-tab-pane>
      <el-tab-pane label="Board Lot">
        <BoardLot />
      </el-tab-pane>
      <el-tab-pane label="About PSETools">
        <About />
      </el-tab-pane>
    </el-tabs>
    <Footer />
  </div>
</template>

<style lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.el-tabs {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import Calculator from '@/components/CalculatorPanel.vue'
import BoardLot from '@/components/BoardLot.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Main',
  components: {
    Calculator,
    BoardLot,
    About,
    Footer
  },
  data () {
    return {}
  }
}
</script>
