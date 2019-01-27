<template>
  <div class="footer">
    <AdSense
      ad-client="ca-pub-5723027799251254"
      ad-slot="3560651237"
      ad-style="display:block;width:320px;height:100px;margin:1rem auto;"
      ad-format="none">
    </AdSense>
    <div class="subfooter">
      <h3>DISCLAIMER</h3>
      <p class="disclaimer">None of the tools and information contained on this site should be used or considered as financial advise or recommendations to buy securities and investments. Please consult with your licensed broker before making important financial decisions. The user assumes all risk associated with all the information taken from this website. PSETools shall not be liable for any damages and loss of profits as a result of using this website and/or any websites linked to this site.</p>
      <p class="copyright">&copy; 2019 PSETools</p>
    </div>
  </div>
</template>

<script>
import AdSense from '@/components/AdSense.vue'

export default {
  name: 'Footer',
  components: {
    AdSense
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  color: #fff;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;

  a {
    color: inherit;
    border-bottom: 1px dotted;
  }
}
.subfooter {
  opacity: 0.75;

  h3 {
    margin-bottom: 5px;
    font-size: 14px;
  }
  .disclaimer {
    margin-top: 0;
    font-size: 0.8rem;
  }
  .copyright {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
