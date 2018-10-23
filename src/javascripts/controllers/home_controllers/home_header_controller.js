// home header 视图的控制器
import home_header_template from '../../views/home/header.html'; 
const render = () => {
    document.querySelector('.header').innerHTML = home_header_template;
    control();
    $(".header__location").find('span').text(localStorage.getItem('site'));
}
 
const control = () =>{
    $('.header').on('click','.header__mine',()=>{
        $(location).prop('href', 'http://localhost:8080/#/my');
    })
}
export default { render }