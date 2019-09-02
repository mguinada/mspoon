<template>
  <div class='about'>
    <h1>Marley Spoon - web challenge</h1>
    <h3>Technological stack</h3>
    <ul>
      <li>
        <a href="http://es6-features.org" target="_blank" rel="noopener">ECMAScript 6</a>
        <br/>
        <span>
          As the programming language
        </span>
      </li>
      <li>
        <a href="https://github.com/contentful/contentful.js" target="_blank" rel="noopener">contentful.js</a>
        <br/>
        <span>
          As the
          <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/" target="_blank" rel="noopener">Contentful's Delivery API</a>
          client with
          <a href="https://www.contentful.com/developers/docs/concepts/links/" target="_blank" rel="noopener">link resolution support</a>
        </span>
      </li>
      <li>
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
        <br/>
        <span>
          As the frontend framework
        </span>
      </li>
      <li>
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Vue CLI</a>
        <br/>
        <span>
          For project infrastrucure management
        </span>
      </li>
      <li>
        <a href="https://babeljs.io" target="_blank" rel="noopener">babel</a>
        <br/>
        <span>
          For ES6 compilation
        </span>
      </li>
      <li>
        <a href="https://eslint.org" target="_blank" rel="noopener">eslint</a>
        <br/>
        <span>
          For linting
        </span>
        <br/>
        <span>
          configured for <a href="https://standardjs.com">JavaScript Standard Style</a>
        </span>
      </li>
      <li>
        <a href="https://jestjs.io/" target="_blank" rel="noopener">jest</a>
        <br/>
        <span>For unit testing</span>
      </li>
      <li>
        <a href="https://nightwatchjs.org" target="_blank" rel="noopener">e2e-nightwatch</a>
        <br/>
        <span>For E2E/Acceptance testing</span>
      </li>
    </ul>
    <h3>Vue Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
    </ul>
  </div>
</template>

<style scoped lang='scss'>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
    padding: 0 0 10px 0;
    font-size: large;
  }
  a {
    color: #42b983;

  }
  span {
    font-size: 90%;
  }
</style>
