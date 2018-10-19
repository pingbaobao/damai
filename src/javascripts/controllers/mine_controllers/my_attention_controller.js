const attention_template = require('../../views/mine/my_attention_controller.html');
const my_attention_artist = require('./my_attention_artist');
const my_attention_project = require('./my_attention_project');
const render = () => {
    document.querySelector('title').innerHTML='我的关注';
    $('#root').html(attention_template);
    $('.like-tab-item').tap(function (){
        if($(this).attr('path')==='artist'){
            my_attention_artist.render();
            $(this).siblings().find('span').removeClass('like-tab-active');
            $(this).find('span').addClass('like-tab-active');
        }else{
            my_attention_project.render(); 
            $(this).siblings().find('span').removeClass('like-tab-active');
            $(this).find('span').addClass('like-tab-active'); 
        }
    })
}

module.exports = {
    render
}