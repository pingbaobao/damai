import home_body_template from '../../views/home/body.html';
import home_instar_model from '../../models/home/home_instar_model';
const render = async() => {
  let _home_instrar_data = await home_instar_model.home_instar_list();
  // 多个star信息数组
  let _home_instar_list = _home_instrar_data.artistProjectList;
  // 将html字符串处理成编译函数
  let _template = Handlebars.compile(home_body_template);
  // 将handlebar模板编译成html格式的字符串
  let _html = _template({
    _home_instar_list
  });
  document.querySelector('.body').innerHTML = _html;

  //轮播图
var boxSwiper = new Swiper('.slideshow-box', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true, //自动放映
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  }
})
//最in明星
var instarSwiper = new Swiper('.slideshow-instar', {
  direction: 'horizontal', // 垂直切换选项
  freeMode: true,
  slidesPerView: '1.56',
  spaceBetween: 10,
})


}
export default {
  render
}