const register_template = require('../../views/mine/register.html');
var is_login = true;
const render = () => {
    document.querySelector('title').innerHTML='用户注册';
    $('#root').html(register_template);
    $('.am-input-extra').tap(function(){
        $(this).find('a').html(Math.floor(Math.random()*10000));
       
    })
    $('.am-button').tap(function () {
        let phone_value = $('.tel_reg').val();
        let yzzz  = /^1(3|5|8|7|4)\d{9}$/;
        if(!yzzz.test(phone_value)){
            is_login = false;
            $('.toastWrapper_1').addClass('show');
            setTimeout(()=>{
                $('.toastWrapper_1').removeClass('show');
            },1000)
        }else{
            is_login = true;
        }
        console.log(is_login);
        if(is_login === true){
            sessionStorage.setItem('phone',phone_value);
            router.switch('#/login');
            
        }
        
    })
}

module.exports = {
    render
}