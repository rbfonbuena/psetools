<template>
  <div class="tab-panel">
    <h2 class="tab-panel__title">Board Lot</h2>
    <p>Table matrix of the minimum number of shares that can be purchased based on the current stock's market price.</p>

    <el-table
      :data="boardLot"
      height="480"
      size="small"
      stripe>
      <el-table-column label="Price">
        <el-table-column prop="min" label="From"></el-table-column>
        <el-table-column prop="max" label="To"></el-table-column>
        <el-table-column prop="tick" label="Tick Size"></el-table-column>
      </el-table-column>
      <el-table-column prop="lot_size" label="Lot Size"></el-table-column>
    </el-table>

  </div>
</template>

<script>
import dataBoardLot from '@/data/boardlot.json'

export default {
  name: 'BoardLot',
  data () {
    return {
      boardLot: dataBoardLot
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  line-height: 1.5;
}
</style>
