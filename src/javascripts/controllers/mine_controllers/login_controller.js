const login_template = require('../../views/mine/login.html');
const render = () => {
    document.querySelector('title').innerHTML='登录';
    $('#root').html(login_template);
    $('.sms-login-link').tap(function () {
       
        $('.login-form').hide();
        $('.login-form-pawd').show();
     })
     $('.password-login-link').tap(function () {
       
        $('.login-form').show();
        $('.login-form-pawd').hide();
     })
     $('.register-link').tap(function () {
       
        router.switch('#/register'); 
     })
     var is_login = true;
     $('.send-btn').tap(function(){
         $(this).find('a').html(Math.floor(Math.random()*10000));
        
     })
     $('.login_submit').tap(function () {
        let yzm  =  $(this).find('a').html();
        let phone_value= $('.tel_login').val();
        let phone_value_1 = sessionStorage.getItem('phone');
        let yzzz  = /^1(3|5|8|7|4)\d{9}$/;
    
        if(!yzzz.test(phone_value)){
            is_login = false;
            $('.toastWrapper_1').addClass('show');
            setTimeout(()=>{
                $('.toastWrapper_1').removeClass('show');
            },1000)
        }
        if(phone_value===phone_value_1 && is_login === true){
            router.switch('#/my');
            
        }
        
    }) 
}

module.exports = {
    render
}