import home_show_template from '../../views/home/show.html'; 
import home_show_model from '../../models/home/home_show_model';

const render = async  () => {
    let _home_show_data = await  home_show_model.home_show_list();
    // 多个show信息数组
    let _home_show_list = _home_show_data.projectInfo;
    // // 将html字符串处理成编译函数
    let _template = Handlebars.compile(home_show_template);
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _home_show_list});
    document.querySelector('.show-wrapper').innerHTML = _html;
    
  
}
export default { render } 