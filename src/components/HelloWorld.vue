<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/hello/son1">son1</router-link>
    <router-link to="/hello/son2">son2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../style/mixin';
h1{
  text-align: center;
}
.hello{
  // background: blue;
  h1{
    color:red;
    .wh(1000px,30px);
  }
}

</style>
