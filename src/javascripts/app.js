import category_controller from './controllers/category_controller/category_controller';

import Router from './router'

//category JS操作
category_controller.render();

//启动路由
const router = new Router ({initial:'#/category'});
window.router = router;
router.init();


