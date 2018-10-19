const Certification_template = require('../../views/mine/my_Certification_controller.html');

const render = () => {
    document.querySelector('title').innerHTML='实名验证';
    $('#root').html(Certification_template);
}

module.exports = {
    render
}