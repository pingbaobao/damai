import home_showcontrol_template from '../../views/home/showcontrol.html'; 
const render = () => {
    document.querySelector('.showcontrol__nav').innerHTML = home_showcontrol_template;
}
export default { render }