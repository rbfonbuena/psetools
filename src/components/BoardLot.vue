<template>
  <div class="tab-panel">
    <!-- <h2 class="tab-panel__title">Board Lot</h2> -->

    <transition name="fade" :duration="1000">
      <el-table :data="boardLot" appear>
        <el-table-column label="Price">
          <el-table-column prop="min" label="From"></el-table-column>
          <el-table-column prop="max" label="To"></el-table-column>
          <el-table-column prop="tick" label="Tick Size"></el-table-column>
        </el-table-column>
        <el-table-column prop="lot_size" label="Lot Size"></el-table-column>
      </el-table>
    </transition>

  </div>
</template>

<script>
import jsonData from '@/data/boardlot.json'

export default {
  name: 'BoardLot',
  data () {
    return {
      boardLot: jsonData
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
