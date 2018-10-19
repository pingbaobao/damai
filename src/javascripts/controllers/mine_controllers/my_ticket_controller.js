import ticket_template from'../../views/mine/my_ticket_controller.html' ;

const render = () => {
    document.querySelector('title').innerHTML='我的票';
    $('#root').html(ticket_template);

}

export default{
    render
}  