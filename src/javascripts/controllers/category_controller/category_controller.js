import category_template from '../../views/category/category.html';
import project_controller from '../category_controller/project_controller'
//负责将home视图模版渲染在对应的地方

const render = () =>{
    document.querySelector('#category_root').innerHTML=category_template;
    project_controller.render();
}

const swiper = () =>{
    var categoryWrapperSwiper = new Swiper('.category-wrapper', {
        direction: 'horizontal',
        slidesPerView: 6,
        spaceBetween: 30
        //spaceBetween: 40
    })
    $(document).ready(function(){
        $('.category-wrapper>.category-wrapper__content>.category-wrapper__item:not(:last-of-type)').click(function(){
            $(this).addClass("category-wrapper__item--active").siblings().removeClass("category-wrapper__item--active");
        });
    });

}

const control = () =>{
    $('.factor>.factor-wapper>.factor-wapper__item').click(function(){
        $(this).addClass("factor_wrapper--active").siblings().removeClass("factor_wrapper--active");
        if($(this).index()===1){
            if($('.factor_select').is(':hidden')){//如果当前隐藏
                $('.factor_select').css('display','block')
                $('.factor_select .recommend').show()
                $('.factor_select .unlimited').hide()
            }else{//否则
                $('.factor>.factor-wapper>.factor-wapper__item').removeClass("factor_wrapper--active");
                $('.factor_select').css('display','none')
            }
        }else if($(this).index()===2){
            if($('.factor_select').is(':hidden')){//如果当前隐藏
                $('.factor_select').css('display','block')
                $('.factor_select .recommend').hide()
                $('.factor_select .unlimited').show()
            }else{//否则
                $('.factor>.factor-wapper>.factor-wapper__item').removeClass("factor_wrapper--active");
                $('.factor_select').css('display','none')
            }
        }
    })

    $('.factor_select>.select-factor__wrap>.select-factor__item').click(function(){
        $(this).addClass("select-factor--selected").siblings().removeClass("select-factor--selected");
        $(this).find('i').addClass('icon-xuanzhong').end().siblings().find('i').removeClass('icon-xuanzhong')
        $('.factor_select').css('display','none')
        $('.factor>.factor-wapper>.factor-wapper__item').removeClass("factor_wrapper--active");
    })

    $('.factor_mask').click(function(){
        $('.factor_select').css('display','none')
        $('.factor>.factor-wapper>.factor-wapper__item').removeClass("factor_wrapper--active");
    })
}

export default { render,swiper,control }