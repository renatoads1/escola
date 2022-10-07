import Vue from "vue";
import Router from "vue-Router";

import HelloWorld from './components/alunos/HelloWorld.vue';
import SobreCompRen from './components/sobre/sobreCompRen.vue';
import ProfessorCompRen from './components/professores/ProfessorCompRen.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {path:'/HelloWorld', nome:'HelloWorld',component: HelloWorld },
        {path:'/sobreCompRen', nome:'sobreCompRen',component: SobreCompRen },
        {path:'/ProfessorCompRen', nome:'ProfessorCompRen',component: ProfessorCompRen }

    ]
})