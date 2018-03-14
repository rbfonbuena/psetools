<template>
  <div class="tab-panel">
    <h2 class="tab-panel__title">Company Names &amp; Stock Symbols</h2>
    <p>PSE listed companies and their corresponding stock symbols and sectors.</p>

    <el-table
      :data="stocks"
      height="480"
      width="100%"
      size="mini"
      empty-text="No Data"
      border stripe>
      <el-table-column
        fixed
        prop="companyName"
        label="Name"
        sortable
        width="340">
      </el-table-column>
      <el-table-column
        prop="securitySymbol"
        label="Symbol"
        width="80">
      </el-table-column>
      <el-table-column
        prop="subsectorName"
        label="Sector"
        width="250">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
// import dataCompanyList from '@/data/companylist.json'

// const apiUrl = 'http://api.teamfonbuena.com/psetools/v1/stocks'
const apiUrl = 'http://prj.psetools-api/v1/stocks'

export default {
  name: 'CompanyList',
  data () {
    return {
      stocks: null
    }
  },
  mounted () {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => { this.stocks = data })
      .catch(error => console.log(error))
  }
}
</script>

<style lang="scss" scoped>
td {
  white-space: nowrap;
}
</style>
