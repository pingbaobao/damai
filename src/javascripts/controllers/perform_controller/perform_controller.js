import perform_template from '../../views/perform/perform.html';
import category_template from '../../views/category/category.html';

const render = () => {
    $('#category_root').html(perform_template);
}

export default {
    render
}