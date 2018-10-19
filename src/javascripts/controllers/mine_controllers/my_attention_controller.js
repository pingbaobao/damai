import attention_template from '../../views/mine/my_attention_controller.html';
import my_attention_artist from'./my_attention_artist';
import my_attention_project from'./my_attention_project';
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
export default{
    render
}