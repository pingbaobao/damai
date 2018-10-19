const my_template = require('../views/mine/my.html');

// const job_controller = require('./home_job_controller'); 
// const search_controller = require('./search_controller'); 
// const profile_controller = require('./profile_controller'); 

// 负责将home视图模板渲染在对应的地方
const render = () => {
    // 刚才说了，一切皆模块，说明html也是模块，看一下它暴露的是什么 发现是字符串
    // console.log(homeTemplate)
    document.querySelector('title').innerHTML = '我的';
    document.querySelector('#root').innerHTML = my_template;

    // 渲染home的job视图
    // job_controller.render();

    // switchTab();
    
    
    let uers_name = sessionStorage.getItem('phone');
    if(uers_name===null){
        $('.my-hd__name').html('登录/注册');
    }else{
        $('.my-hd__name').html(uers_name);
    }

    let login_name = $('.my-hd__name').html();
    if (login_name != '登录/注册') {
        $('.my-login-out').show();
    }
    $('.my-login-out').tap(function () {
        sessionStorage.clear();
        // router.switch('#/my'); 
        window.location.reload();
        
        
    })
    $('.mine__list').tap(function () {
       
        if (login_name === '登录/注册') {
           
            router.switch('#/login');
        }else{

            const path = $(this).attr('path');
            router.switch(path);
        }
    })


$('.my-hd').tap(function () {
    if(login_name === '登录/注册'){
        router.switch('#/login');
    }
    
})
}

// // 切换标签
// const switchTab = () => {
//     $('.footer__item').on('tap', function () {
//         let _controllers = [ job_controller, search_controller, profile_controller ];
//         _controllers[$(this).index()].render();
//         $(this).addClass('active').siblings().removeClass('active');
//     })
// }

module.exports = {
    render
}

