<template>
  <div class="tab-panel">
      <h2 class="tab-panel__title">Buy &amp; Sell Calculator</h2>
      <el-form label-position="top">

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Number of Shares">
              <el-input-number
                controls-position="right"
                v-model="tradeCalc.shares"
                :min="0"
                :step="10"
                @input="updateShares"
              >
              </el-input-number>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Commission Rate">
              <el-input-number
                controls-position="right"
                v-model="tradeCalc.commission"
                :min="0.25"
                :step="0.01"
                @change="updateCommission"
              >
              </el-input-number>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Buying Price">
              <el-input-number
                controls-position="right"
                v-model="tradeCalc.buyingPrice"
                :min="0"
                :step="0.01"
                @change="updateBuyingPrice"
              >
              </el-input-number>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="Selling Price">
              <el-input-number
                controls-position="right"
                v-model.number="tradeCalc.sellingPrice"
                :min="0"
                :step="0.01"
                @change="updateSellingPrice"
              >
              </el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-row :gutter="20">
        <el-col>
          <el-collapse v-model="activeSection">
            <el-collapse-item name="1">
              <template slot="title">
                <strong>Total Buying Price: {{ totalBuyAmount | currency('') }}</strong>
                <small>More details</small>
              </template>
              <div>
                <table class="fee-schedule-table" cellpadding="8" cellspacing="0">
                  <tr>
                    <td>Gross Share Amount</td>
                    <td align="right">{{ grossBuyAmount | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>Broker's Fee</td>
                    <td align="right">{{ buyingFees.brokers | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>12% Value-added Tax (VAT)</td>
                    <td align="right">{{ buyingFees.vat | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>PSE Transaction Fee</td>
                    <td align="right">{{ buyingFees.pse | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>SCCP Fee</td>
                    <td align="right">{{ buyingFees.sccp | currency('') }}</td>
                  </tr>
                  <tr>
                    <td><strong>Total Buying Fees</strong></td>
                    <td align="right"><strong>{{ buyingFees.total | currency('') }}</strong></td>
                  </tr>
                </table>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <strong>Total Sale Amount: {{ totalSellAmount | currency('') }}</strong>
                <small>More details</small>
              </template>
              <div>
                <table class="fee-schedule-table" cellpadding="8" cellspacing="0">
                  <tr>
                    <td>Gross Share Value</td>
                    <td align="right">{{ grossSaleAmount | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>Broker's Fee</td>
                    <td align="right">{{ sellingFees.brokers | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>12% Value-added Tax (VAT)</td>
                    <td align="right">{{ sellingFees.vat | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>PSE Transaction Fee</td>
                    <td align="right">{{ sellingFees.pse | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>SCCP Fee</td>
                    <td align="right">{{ sellingFees.sccp | currency('') }}</td>
                  </tr>
                  <tr>
                    <td>Sales Tax</td>
                    <td align="right">{{ sellingFees.salesTax | currency('') }}</td>
                  </tr>
                  <tr>
                    <td><strong>Total Selling Fees</strong></td>
                    <td align="right"><strong>{{ sellingFees.total | currency('') }}</strong></td>
                  </tr>
                </table>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <el-col>
          <h2 class="net-profit">Net{{ netType }}: <span :class="{ profit: isProfit, loss: isLoss }">{{ netProfit | currency('') }} ({{ percentChange | currency('') }}%)</span></h2>
        </el-col>
      </el-row>

  </div>
</template>

<script>
const FEES = {
  VAT: 0.12,
  PSE: 0.00005,
  SCCP: 0.0001,
  SALES_TAX: 0.006
}

export default {
  name: 'Calculator',
  data () {
    return {
      activeSection: [],
      netType: '',
      isProfit: false,
      isLoss: false,
      netProfit: 0,
      percentChange: 0,
      totalBuyAmount: 0,
      totalSellAmount: 0,
      grossBuyAmount: 0,
      grossSaleAmount: 0,
      buyingFees: {
        brokers: 0,
        pse: 0,
        sccp: 0,
        vat: 0,
        total: 0
      },
      sellingFees: {
        brokers: 0,
        pse: 0,
        sccp: 0,
        vat: 0,
        salesTax: 0,
        total: 0
      },
      tradeCalc: {
        shares: 0,
        commission: 0.25,
        buyingPrice: 0,
        sellingPrice: 0
      }
    }
  },
  methods: {
    computeProfit () {
      if (this.totalBuyAmount !== 0 && this.totalSellAmount !== 0) {
        this.netProfit = this.totalSellAmount - this.totalBuyAmount
        this.percentChange = ((this.totalSellAmount - this.totalBuyAmount) / this.totalBuyAmount) * 100
        if (this.netProfit < 0) {
          this.isProfit = false
          this.isLoss = true
        } else if (this.netProfit > 0) {
          this.isProfit = true
          this.isLoss = false
        } else {
          this.isProfit = false
          this.isLoss = false
        }
      } else {
        this.netProfit = 0
        this.percentChange = 0
        this.isProfit = false
        this.isLoss = false
      }
    },
    getCommission (amount) {
      let brokerCommission = amount * (this.tradeCalc.commission / 100)
      if (brokerCommission > 0 && brokerCommission < 20) {
        brokerCommission = 20
      }
      return brokerCommission
    },
    setTotalFees (amount, type = 'buy') {
      switch (type) {
        case 'sell':
          this.sellingFees.vat = this.sellingFees.brokers * FEES.VAT
          this.sellingFees.pse = amount * FEES.PSE
          this.sellingFees.sccp = amount * FEES.SCCP
          this.sellingFees.salesTax = amount * FEES.SALES_TAX
          this.sellingFees.total = this.sellingFees.brokers + this.sellingFees.vat + this.sellingFees.pse + this.sellingFees.sccp + this.sellingFees.salesTax
          this.totalSellAmount = amount - this.sellingFees.total
          break
        default:
          this.buyingFees.vat = this.buyingFees.brokers * FEES.VAT
          this.buyingFees.pse = amount * FEES.PSE
          this.buyingFees.sccp = amount * FEES.SCCP
          this.buyingFees.total = this.buyingFees.brokers + this.buyingFees.vat + this.buyingFees.pse + this.buyingFees.sccp
          this.totalBuyAmount = amount + this.buyingFees.total
          break
      }
    },
    computeBuyAmount () {
      let amount = this.tradeCalc.shares * this.tradeCalc.buyingPrice
      this.grossBuyAmount = amount
      this.buyingFees.brokers = this.getCommission(amount)
      this.setTotalFees(amount)
      this.computeProfit()
    },
    computeSellAmount () {
      let amount = this.tradeCalc.shares * this.tradeCalc.sellingPrice
      this.grossSaleAmount = amount
      this.sellingFees.brokers = this.getCommission(amount)
      this.setTotalFees(amount, 'sell')
      this.computeProfit()
    },
    updateShares (value) {
      this.tradeCalc.shares = value
      this.computeBuyAmount()
      this.computeSellAmount()
    },
    updateBuyingPrice (value) {
      this.tradeCalc.buyingPrice = value
      this.computeBuyAmount()
      // this.computeProfit()
    },
    updateSellingPrice (value) {
      this.tradeCalc.sellingPrice = value
      this.computeSellAmount()
      // this.computeProfit()
    },
    updateCommission (value) {
      this.tradeCalc.commission = value
      this.computeBuyAmount()
      this.computeSellAmount()
    }
  }
}
</script>

<style lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.section-title-icon {
  color: $--color-primary;
}
.el-collapse-item__header {
  font-size: 1.125rem;

  small {
    margin-left: 0.25rem;
    font-size: 0.7em;
    text-transform: uppercase;
    opacity: 0.4;
  }
}
.el-input-number {
  width: 100%;
}
.tab-panel__title {
  margin: 0 auto 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid $--border-color-base;
}
.fee-schedule-table {
  width: 100%;

  tr:nth-child(even) {
    background-color: $--background-color-base; //lighten($--color-text-primary, 75%);
  }
}
.net-profit {
  text-align: center;
}
.profit {
  color: $--color-success
}
.loss {
  color: $--color-danger
}
</style>
