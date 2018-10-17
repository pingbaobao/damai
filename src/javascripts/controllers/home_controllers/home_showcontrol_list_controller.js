import home_showcontrol_list_template from '../../views/home/showcontrol-list.html'; 
const render = () => {
    document.querySelector('.showcontroler-list').innerHTML = home_showcontrol_list_template;
}
export default { render }