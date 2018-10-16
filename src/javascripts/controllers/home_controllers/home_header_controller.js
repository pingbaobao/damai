// home header 视图的控制器
import home_header_template from '../../views/home/header.html'; 
const render = () => {
    document.querySelector('.header-wrapper').innerHTML = home_header_template;
}
export default { render }