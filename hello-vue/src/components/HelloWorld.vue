<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> {{ helloMessage }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      helloMessage: ''
    }
  }, // end data
  props: {
    msg: String
  },
  mounted() {
    // this is called when component is shown on page
    // component is created, then mounted (made visible)
    // this is how to do something as component loads ("hooks")
    // other methods: created: done when component is created
    // unmounted: done when component is no longer visible

    console.log('inside the mounted method in HelloWorld.vue')

    this.$hello_api.getHelloMessage().then(response => {
      this.helloMessage = response.message
      console.log("this.helloMessage statement HelloWorld.vue")
    })
  }
}
// mounted is called as vue component comes onto screen, good for initial setup/data fetch
// so make API call here
// helloAPI here matches helloAPI in main.js
// getHelloMessage returns a promise, so we need .then, resp is JSON

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
