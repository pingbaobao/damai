import Certification_template from'../../views/mine/my_Certification_controller.html';

const render = () => {
    document.querySelector('title').innerHTML='实名验证';
    $('#root').html(Certification_template);
}

export default{
    render
}