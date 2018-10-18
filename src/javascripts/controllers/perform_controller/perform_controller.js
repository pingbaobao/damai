import perform_template from '../../views/perform/perform.html';

const render = () => {
    

    let index = sessionStorage.getItem("index");
    let datasources =  JSON.parse(sessionStorage.getItem("data"));
    let main = datasources[index];
    console.log(main);
    let _template = Handlebars.compile(perform_template);
    let _html = _template(main);
    $('#root').html(_html);
}

export default {
    render
}