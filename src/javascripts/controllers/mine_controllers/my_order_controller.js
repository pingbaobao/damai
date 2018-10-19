

const order_template = require('../../views/mine/my_order_controller.html');

const render = () => {
    document.querySelector('title').innerHTML='我的订单';
    let _template = Handlebars.compile(order_template);
    let _html = _template({ _job_list:[{
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        e:"e",
        f:"f",
        g:"g"
    },
    {
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        e:"e",
        f:"f",
        g:"g"
    },
    {
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        e:"e",
        f:"f",
        g:"g"
    },
    {
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        e:"e",
        f:"f",
        g:"g"
    },{
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        e:"e",
        f:"f",
        g:"g"
    }]

    
    })
    
    $('#root').html(_html);
}

module.exports = { 
    render
}