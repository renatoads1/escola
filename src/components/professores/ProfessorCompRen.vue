<template>
    <div>
    <MeuPrimeiroComponente texto="Professores" />
    <table class="table" style="border:1px solid black;">
      <thead>
        <th>codigo</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length">
        <tr v-for="(professor,index) in professores" :key="index">
          <td>{{professor.id}}</td>
          <td>{{professor.nome}}</td>
          <td>{{professor.sobrenome}}</td>
          <td>3</td>
        </tr>
      </tbody>
      <tfoot  v-if="!professores.length">
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
            return {
                professores:[
                    {id:1,nome:"PRenato",sobrenome:"PAzevedo"},
                    {id:2,nome:"PIsabela",sobrenome:"PLacerda"},
                    {id:3,nome:"PJúlia",sobrenome:"PLacerda"}
                ]
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>