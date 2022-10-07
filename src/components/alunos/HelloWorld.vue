<template>
  <div>
      <MeuPrimeiroComponente texto="Alunos" />
      <input type="text" placeholder="Nome do Aluno" v-model="nome" />
      <input type="text" placeholder="sobrenome do Aluno" v-model="sobrenome" v-on:keyup.enter="addAluno()" />
    <hr>
    <table class="table" style="border:1px solid black;">
      <thead>
        <th>Matéria</th>
        <th>Nome</th>
        <th>Opçoes</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(item,index) in alunos" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.nome}} {{item.sobrenome}}</td>
          <td><button class="btn" @click="remover(item)">remove</button></td>
        </tr>
      </tbody>
      <tfoot  v-if="!alunos.length">
        Nenhum Aluno Encontrado!!! 
      </tfoot>
    </table>
</div>
</template>

<script>
import MeuPrimeiroComponente from '../_share/MeuPrimeiroComponente.vue';


export default {
  components:{
    MeuPrimeiroComponente
  },
  data(){
    return{
      nome:'',
      sobrenome:'',
      titulo:'Alunos',
      alunos:[]
    }
  },
  created(){
    this.$http.get('http://localhost:3000/alunos')
    .then(res => res.json())
    .then(alunos => this.alunos = alunos);
  },
  props: {

  },
  methods: {
    addAluno() {
      let _aluno = {nome: this.nome,sobrenome:this.sobrenome}

      this.$http.post('http://localhost:3000/alunos',_aluno)
      .then(res => res.json())
      .then(alunos => this.alunos = alunos)
      .then(alunorentorno=>{
          this.alunos.push(alunorentorno);
          this.nome = '';
          this.sobrenome = '';
      });


    },
    remover(aluno){
      this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`)
      .then(() => {
          let indice = this.alunos.indexOf(aluno);
          this.alunos.splice(indice,1);
      })
    } 
  }
}
</script>

<style scoped>

</style>
