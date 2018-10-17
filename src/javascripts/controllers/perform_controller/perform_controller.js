import perform_template from '../../views/perform/perform.html';

const render = () => {
    $('#root').html(perform_template);
}

export default {
    render
}