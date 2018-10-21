

import order_template from '../../views/mine/my_order_controller.html';

let projectMain = JSON.parse(sessionStorage.getItem("projectMain"));

const render = () => {
    document.querySelector('title').innerHTML = '我的订单';
    let _template = Handlebars.compile(order_template);
    let _html = _template({
        _job_list: projectMain
    })

    $('#root').html(_html);
    
}

export default {
    render
}