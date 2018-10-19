

const coupon_template = require('../../views/mine/my_coupon_controller.html');

const render = () => {
    document.querySelector('title').innerHTML='优惠券';
    $('#root').html(coupon_template);

    $('.dm-button').tap(function () {
       $('.dm-dialog').show();
      
    })
    $('.dm-dialog__hd__close').tap(function (){
        $('.dm-dialog').hide();
    })
    $('.dm-dialog__ft__item').tap(function (){
        $('.dm-dialog').hide();
    })
}

module.exports = {
    render
}  