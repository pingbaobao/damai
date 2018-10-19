import project_template from'../../views/mine/my_attention_project.html';


const render = () => {
    $('.like-scroller-container').html(project_template);
}

export default{
    render
}