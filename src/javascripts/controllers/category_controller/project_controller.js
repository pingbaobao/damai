import project_template from '../../views/category/project.html';
import project_content_template from '../../views/category/project-content.html'
import project_model from '../../models/category_models';

import BScroll from 'better-scroll';

let datasources = [] //project页面要显示的所有数据

const render = () => {
    //初始加载一下
    //console.log(project_template)
    let _template = Handlebars.compile(project_template);
    let _html = _template();
    $('.category-main').html(_html);
    handleContentScroll();
}

const handleContentScroll = async () =>{
    // 实例化bscroll
    let _project_scroll = new BScroll('.category-main', {
        startY: -40,
        probeType: 2
    });
    //console.log('ok')

    await getProjectList();//初始化加载
    _project_scroll.refresh();//异步加载完成后，让better-scroll重新计算

    let _o_scroll_info_top = $('.pull-to-refresh-layer') //下拉刷新的dom元素
    let _o_scroll_info_top_icon = _o_scroll_info_top.find('.iconfont') //下拉刷新的icon
    let _o_scroll_info_top_title = _o_scroll_info_top.find('.pull-to-refresh-layer-title') //下拉刷新的文字dom
    let _o_loading = $('.loading-cover')//数据加载中
    let _scroll_y_sta = 'go' //下拉刷新的状态
    let _scroll_bottom_sta = false;

    
    _project_scroll.on('scroll',({x,y})=>{
        if( y > 0 && _scroll_y_sta !== 'release'){//放手就刷新
            //使用状态判断是否放在符合条件还不断的更改视图
            _scroll_y_sta = 'release';
            _o_scroll_info_top_icon.addClass('rotate')
        }
        _scroll_bottom_sta = false;
        if( _project_scroll.maxScrollY-y > 0){
            _scroll_bottom_sta = true;
            _o_loading.css('display','block');
        }
    })

    _project_scroll.on('scrollEnd', async ({x,y}) =>{
        if( y > -80 && y < 0) { //没有完全拉出刷新元素
            //塞回去
            _project_scroll.scrollTo(0,-40,300)
        }else if ( y=== 0){//获取数据
            if( _scroll_y_sta === 'release' ){
                _o_scroll_info_top_icon.addClass('icon-loading').removeClass('icon-shangla').addClass('.loading')
                _o_scroll_info_top_title.html('正在加载')
                await refreshProjectList()
                _o_scroll_info_top_icon.removeClass('icon-loading').addClass('icon-shangla').removeClass('.loading').removeClass('.rotate')
                _o_scroll_info_top_title.html('下拉就刷新')
                _scroll_y_sta = 'go'
                _project_scroll.refresh()
            }
            _project_scroll.scrollTo(0, -40, 300);
        }

        if( _project_scroll.maxScrollY - y ===0 && _scroll_bottom_sta) {
            await getProjectList();
            _o_loading.css('display','none');
            _project_scroll.refresh();
        }
    })
}

const refreshProjectList = async () => {//下拉刷新的时候去获取数据
    let _project_data = await project_model.project_refresh();
    let _project_list = _project_data.data.projectInfo;
    datasources = [..._project_list,...datasources] //刷新，新数据放在前面
    renderProjectList();

}

const getProjectList = async () =>{
    let _project_data = await project_model.project_list();
    let _project_list = _project_data.data.projectInfo;
    datasources = [...datasources,..._project_list]
    renderProjectList() //每次获取到新的数据后重新渲染
}


const renderProjectList = () =>{
    //将html字符串处理成编译函数
    let _template = Handlebars.compile(project_content_template)
    //将handerbar模版编译成html格式的字符串
    let _html = _template({ _project_list: datasources})
    //渲染视图
    $('.wrap-projects__content').html(_html)
}

export default {
    render
}