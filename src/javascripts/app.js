import Router from './router'
//启动路由
const router = new Router({ initial: '#/home' });
window.router = router;
router.init();
