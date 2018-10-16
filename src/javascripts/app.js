import home_controller from './controllers/home_controllers/home_main_controller';
import Router from './router'
// 渲染视图
home_controller.render();
//启动路由
const router = new Router({ initial: '#/home' });
window.router = router;
router.init();