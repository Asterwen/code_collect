<template>
  <div class="testFunc">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    
    
    var bar = function() {
            return 'world';
        };
    console.log(typeof foo); // function pointer    
    // function foo() {
    //     return 'hello';
    // }
    var foo = 'hello'
    console.log(typeof bar); // undefined
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
