const address_template = require('../../views/mine/my_address_controller.html');

const render = () => {
    document.querySelector('title').innerHTML='收货地址';
    $('#root').html(address_template);
}

module.exports = {
    render 
}