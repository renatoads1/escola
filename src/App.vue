<template>
  <div id="app">
    <NavCompRen></NavCompRen>
    <router-view></router-view>
    <!-- <ProfessorCompRen></ProfessorCompRen>
    <HelloWorld/>
    <SobreCompRen></SobreCompRen> -->
</div>
</template>

<script>

import NavCompRen from './components/_nav/NavCompRen.vue';
// import HelloWorld from './components/alunos/HelloWorld.vue';
// import SobreCompRen from './components/sobre/sobreCompRen.vue';
// import ProfessorCompRen from './components/professores/ProfessorCompRen.vue'


export default {
  name: 'app',
  components: {
    NavCompRen,
    // HelloWorld,
    // SobreCompRen,
    // ProfessorCompRen
}
}
</script>

<style>
#app {

}
</style>
