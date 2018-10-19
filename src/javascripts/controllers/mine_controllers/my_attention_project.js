const project_template = require('../../views/mine/my_attention_project.html');


const render = () => {
    $('.like-scroller-container').html(project_template);
}

module.exports = {
    render
}