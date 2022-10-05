<template>
  <div id="app">
    <nav></nav>
    <HelloWorld/>
</div>
</template>

<script>
import HelloWorld from './components/alunos/HelloWorld.vue'
import Nav from './components/_nav/nav.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    Nav
  }
}
</script>

<style>
#app {

}
</style>
