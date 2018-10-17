import home_showcontrol_template from '../../views/home/showcontrol.html';
import BScroll from 'better-scroll';
const render = () => {
    document.querySelector('.showcontrol__nav').innerHTML = home_showcontrol_template;

    const _scroll = new BScroll('.scroll-box-wrapper', {
        probeType:2,
        scrollY: true,
        click: true
    });
    //菜单列表的隐藏出现
    $(".showcontroler-list").hide();
    $(".showcontrol__nav").find("li").click(function () {
        $(".showcontroler-list").show();
        $(this).addClass("active").siblings().removeClass("active");
        if(_scroll.y<1017){ 
            _scroll.scrollTo(0,-1017);
        }
        $(".showcontroler-list").click(function () {
            $(".showcontroler-list").hide();
        }) 
    })
    //菜单的固定
    _scroll.on("scrollEnd", ({ x, y }) => {
        if(y<=-1017){
            console.log("显示");
            $(".showcontrol__nav-clone").addClass("showcontrol__nav-clone-active");
        }
        else{
            $(".showcontrol__nav-clone").removeClass("showcontrol__nav-clone-active");
        }

    })



}
export default {
    render
}