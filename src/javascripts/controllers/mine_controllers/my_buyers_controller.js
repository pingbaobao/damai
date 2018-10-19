const buyers_template = require('../../views/mine/my_buyers_controller.html');

const render = () => {
    document.querySelector('title').innerHTML='常用购票人';
    $('#root').html(buyers_template);
    $('.dm-button').tap(function () {
        $('.dm-popup-right').show();
       
     })
     $('.dm-select').tap(function () {
        $('.v-modal').show();
        $('.dm-select-popup').show();
       
     })
     $('.dm-select-popup__wp').tap(function () {
       let select_value = $(this).find('h2').html();
       $('.dm-select').html(select_value +"<i class='iconfont icon-youjiantou icon-right-arrow' style='transform: rotate(90deg);'></i>");
       $('.v-modal').hide();
       $('.dm-select-popup').hide();
       $(this).siblings().find('.dm-select-popup__item__icon').hide();
       $(this).find('.dm-select-popup__item__icon').show();
     })
}

module.exports = {
    render
}