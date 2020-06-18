import CaixaDeEntrada from '../views/CaixaDeEntrada';
import Excluidos from '../views/Excluidos';
import Enviados from '../views/Enviados';
import Importantes from '../views/Importantes';
import Login from '../views/Login';

const routes = [
    {
      path: '/',
      name: 'CaixaDeEntrada',
      component: CaixaDeEntrada,
      title: 'Caixa de entrada',
      icon:'mdi-email-receive'
    },
    {
      path: '/excluidos',
      name: 'Excluidos',
      component: Excluidos,
      title: 'Excluidos',
      icon:'mdi-delete'
    },
    {
      path: '/enviados',
      name: 'Enviados',
      component: Enviados,
      title: 'Enviados',
      icon:'mdi-send'
    },
    {
        path: '/importantes',
        name: 'Importantes',
        component: Importantes,
        title: 'Importantes',
        icon:'mdi-label-variant'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        icon:''
    }
  ];

  export default routes;