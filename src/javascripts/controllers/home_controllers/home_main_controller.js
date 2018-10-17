import home_template from '../../views/home/home.html';
import home_header_control from './home_header_controller'
import home_body_control from './home_body_controller'
import home_showcontrol_control from './home_showcontrol_controller'
import home_show_control from './home_show_controller'
import home_showcontrol_list_control from './home_showcontrol_list_controller'
const render = () => {
  document.querySelector('#root').innerHTML = home_template;
  //页面渲染
  home_header_control.render();
  home_body_control.render();
  home_showcontrol_control.render();
  home_show_control.render();
  home_showcontrol_list_control.render();

}
export default {
  render
};
//轮播图
