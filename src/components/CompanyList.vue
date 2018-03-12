<template>
  <div class="tab-panel">
    <h2 class="tab-panel__title">Company/Sector Names &amp; Stock Symbols</h2>
    <p>PSE listed companies and their corresponding stock symbols</p>

    <el-table
      :data="companyData"
      height="480"
      width="100%"
      size="mini"
      border stripe>
      <el-table-column
        prop="name"
        label="Name"
        sortable>
      </el-table-column>
      <el-table-column
        prop="symbol"
        label="Stock Symbol">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import dataCompanyList from '@/data/companylist.json'

export default {
  name: 'CompanyList',
  data () {
    return {
      companyData: dataCompanyList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
