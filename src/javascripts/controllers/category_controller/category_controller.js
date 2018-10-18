import category_template from '../../views/category/category.html';
import project_controller from '../category_controller/project_controller'
//负责将home视图模版渲染在对应的地方

const render = () =>{
    document.querySelector('#root').innerHTML=category_template;
    project_controller.render();
    swiper();
    control();
}

const swiper = () =>{
    //顶部导航swiper
    var categoryWrapperSwiper = new Swiper('.category-wrapper', {
        direction: 'horizontal',
        slidesPerView: 6,
        spaceBetween: 30
        //spaceBetween: 40
    })
    //点击切换样式
    $(document).ready(function(){
        $('.category-wrapper>.category-wrapper__content>.category-wrapper__item:not(:last-of-type)').click(function(){
            $(this).addClass("category-wrapper__item--active").siblings().removeClass("category-wrapper__item--active");
        });
    });

}

const control = () =>{
    //排序方式JS操作
    $('.factor>.factor-wapper>.factor-wapper__item').click(function(){
        $(this).addClass("factor_wrapper--active").siblings().removeClass("factor_wrapper--active");
        if($(this).index()===1){//判断是否是点击排序方式
            if($('.factor_select').is(':hidden')){//如果当前隐藏
                $('.factor_select').css('display','block')
                $('.factor_select .recommend').show()//排序方式的列表显现
                $('.factor_select .unlimited').hide()//时间限制的列表显现
            }else{//否则
                $('.factor>.factor-wapper>.factor-wapper__item').removeClass("factor_wrapper--active");
                $('.factor_select').css('display','none')
            }
        }else if($(this).index()===2){//判断是否是点击时间限制
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
        if($(this).siblings().length===2){//根据兄弟元素数量来判断是那个选项框
            $('.factor>.factor-wapper>.factor-wapper__item:eq(1)').find('span').text($(this).text())
        }else if($(this).siblings().length===5){
            $('.factor>.factor-wapper>.factor-wapper__item:eq(2)').find('span').text($(this).text())
        }
    })

    $('.factor_mask').click(function(){
        $('.factor_select').css('display','none')
        $('.factor>.factor-wapper>.factor-wapper__item').removeClass("factor_wrapper--active");
    })
    
    project_controller.select()
}

export default { render }