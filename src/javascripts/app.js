import Router from './router'
//启动路由
const router = new Router({ initial: '#/perform' });
window.router = router;
router.init();
