<template>
  <div class="tab-panel">
    <h2 class="tab-panel__title">What is PSETools?</h2>
    <p><strong>PSETools</strong> or <strong>Philippine Stock Exchange Tools</strong> was created as a learning exercise for the <a href="https://vuejs.org/" title="VueJS" rel="nofollow" target="_blank">Vue</a> javascript framework, and to address a personal need to have the basic trading information and tools in one place.</p>

    <p>For the curious, the source code is available on <a href="https://github.com/rbfonbuena/psetools" title="PSETools on GitHub" rel="nofollow" target="_blank">GitHub</a>.</p>

    <h3>Technologies Used</h3>
    <div id="techs">
      <a href="https://vuejs.org/" title="VueJS" rel="nofollow" target="_blank"><img src="@/assets/images/logo-vue.svg" alt="Vue Logo"></a>
      <a href="http://element.eleme.io/" title="Element" rel="nofollow" target="_blank"><img src="@/assets/images/logo-element.svg" alt="Element Logo"></a>
      <a href="https://nodejs.org/en/" title="NodeJS" rel="nofollow" target="_blank"><img src="@/assets/images/logo-nodejs.svg" alt="NodeJS"></a>
      <a href="https://webpack.js.org/" title="Webpack" rel="nofollow" target="_blank"><img src="@/assets/images/logo-webpack.svg" alt="Webpack"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
p {
  line-height: 1.5;
}
h3 {
  margin-top: 2rem;
  text-align: center;
}
#techs {
  text-align: center;

  a, img {
    display: inline-block;
    // width: 180px;
    width: 100%;
    max-width: 200px;
    max-height: 100px;
    vertical-align: middle;
  }
  a {
    margin: 2rem 1rem;
  }
  img {
    display: inline-block;
    filter: grayscale(100%);
    opacity: 0.75;
    &:hover {
      filter: none;
      opacity: 1;
    }
  }
}
</style>
