import address_template from '../../views/mine/my_address_controller.html';

const render = () => {
    document.querySelector('title').innerHTML='收货地址';
    $('#root').html(address_template);
}
export default{
    render 
}