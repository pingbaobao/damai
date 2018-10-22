import home_show_template from '../../views/home/show.html'; 
import home_show_model from '../../models/home/home_show_model';
import BScroll from 'better-scroll';
import { async } from 'rxjs/internal/scheduler/async';
const render = async  () => {
    let _home_show_data = await  home_show_model.home_show_list();
    // 多个show信息数组 
    let _home_show_list = _home_show_data.projectInfo;
    // // 将html字符串处理成编译函数
    let _template = Handlebars.compile(home_show_template);
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({_showdatasource: _home_show_list});
    $('.show-wrapper').html(_html);

    const _scroll = new BScroll('.scroll-box-wrapper', {
        probeType:2,
        scrollY: true,
        click: true
    });
    //菜单列表的隐藏
    $(".showcontroler-list").hide();
    //菜单的点击事件
    $(".showcontrol__nav").find("li").click(function () {
        //重置列表隐藏藏样式
        $(".showcontroler-list").find("ul").css({
            display:"none"
        })
        //弹出显示整个盒子
        $(".showcontroler-list").show();
        let _index=$(this).index();
        //如果点击推荐
        if(_index==2||_index==3){
            $(".showcontroler-list").hide();
        }
        //显示相应的列表
        $(".showcontroler-list").find("ul").eq(_index).css({
            display:"block"
        })
        
        $(this).addClass("active").siblings().removeClass("active");
        if(_scroll.y<1021){ 
            _scroll.scrollTo(0,-1021);
        }
        //更新菜单栏文字
        $(".showcontroler-list").find("ul").find("li").click(function () {
            if($(this).parent().attr("class")=="show-list-kinds"){
               var _navIndex=0;
            }
            if($(this).parent().attr("class")=="show-list-time"){
                var _navIndex=1;
             }
            $(".showcontrol__nav").find("li").eq(_navIndex).html($(this).text()+' <i class="iconfont icon-jiantouxia"></i>');
        })
        //点击消失列表 
        $(".showcontroler-list").click(function () {
            $(".showcontroler-list").hide();
            $(".showcontroler-list").find("ul").eq(_index).css({
                display:"none"
            })
        }) 
    })
    //菜单的固定
    _scroll.on("scrollEnd", ({ x, y }) => {
        if(y<=-1017){
            $(".showcontrol__nav-clone").addClass("showcontrol__nav-clone-active");
        }
        else{
            $(".showcontrol__nav-clone").removeClass("showcontrol__nav-clone-active");
        }

        // 回到顶部
        if(y<-1500){
            $(".gotop").addClass("gotop-active");
            
        }else{
            $(".gotop").removeClass("gotop-active");
        }

    })
    $(".gotop").on("click",function(){
        _scroll.scrollTo(0,0);
        $(".showcontrol__nav-clone").removeClass("showcontrol__nav-clone-active");
        $(".gotop").removeClass("gotop-active");
    })


    //下拉刷新
    let _showdatasource=_home_show_list;
    const refresh=async()=> {
        _showdatasource=[..._showdatasource,..._home_show_list];
        // // 将html字符串处理成编译函数
        let _template = Handlebars.compile(home_show_template);
        // 将handlebar模板编译成html格式的字符串
        let _html = _template({ _showdatasource});
        await $('.show-wrapper').html(_html);
        await _scroll.refresh();
        _refresh=false;
    }

    $('.show-wrapper').on('click','.show-item',function(){
        sessionStorage.setItem("index", $(this).index());
        let str = JSON.stringify(_showdatasource)
        sessionStorage.setItem("data", str);
        //console.log('ok')
        $(location).prop('href', 'http://localhost:8080/#/perform');
    })
    var  _refresh=false;
    _scroll.on('scroll', ({ x, y }) => {
        if(y<_scroll.maxScrollY &&_refresh===false){
            _refresh=true;
             refresh();
        }
    })
}
export default { render }  