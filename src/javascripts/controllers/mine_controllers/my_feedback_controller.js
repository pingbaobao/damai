import feedback_template from'../../views/mine/my_feedback_controller.html';

const render = () => {
    document.querySelector('title').innerHTML='意见反馈';
    $('#root').html(feedback_template);
    $('.cell-bottom-border').tap(function () {
        $('.feedback').hide();
        $('.feedbackAdd').show();
        let index = $(this).attr('data-spm');
        $('.feedbackAdd-types-wrapper-item').eq(index).siblings().removeClass('feedbackAdd-types-wrapper-item-choosen');
        $('.feedbackAdd-types-wrapper-item').eq(index).addClass('feedbackAdd-types-wrapper-item-choosen');
     })
     $('.disabledBtn').tap(function () {
        $('.feedback').show();
        $('.feedbackAdd').hide();
     })
}

export default{
    render
}