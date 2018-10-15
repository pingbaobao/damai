// home 视图的控制器
import home_header_template from '../views/home.html'; 
const render = () => {
    document.querySelector('#root').innerHTML = home_template;
}
export default { render }