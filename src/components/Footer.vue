<template>
  <div class="footer">
    <div class="disclaimer">
      <h3>DISCLAIMER</h3>
      <p class="disclaimer">None of the tools and information contained on this site should be used or considered as financial advise or recommendations to buy securities and investments. Please consult with your licensed broker before making important financial decisions. The user assumes all risk associated with all the information taken from this website. PSETools shall not be liable for any damages and loss of profits as a result of using this website and/or any websites linked to this site.</p>
    </div>
    <p class="copyright">&copy; 2018 PSETools</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
  opacity: 0.75;

  p {
    font-size: 14px;
    line-height: 1.5;
  }

  a {
    color: inherit;
    border-bottom: 1px dotted;
  }
}
.disclaimer {
  h3 {
    margin-bottom: 5px;
    font-size: 14px;
  }

  p {
    margin-top: 0;
    font-size: 0.8rem;
  }
}
</style>
