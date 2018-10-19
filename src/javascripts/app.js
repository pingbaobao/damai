
//jack-detail
// tom-login

//rem
// require('./modules/flexible');
// import './modules/flexible'

import Router from './router/index'
import my_controller from './controllers/my_controller';


// 渲染视图
my_controller.render();

// 启动路由
const router = new Router({ initial: '#/my' });
window.router = router;
router.init();


