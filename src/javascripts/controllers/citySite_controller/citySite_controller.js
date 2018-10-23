import citySite_template from '../../views/citySite/citySite.html';
import BScroll from 'better-scroll';
const render = () => {
    $('#root').html(citySite_template);
    const _locationScroll = new BScroll('.city-wrapper', {
    probeType:2,
    scrollY: true,
    click: true
    });
    $('li').on('tap',async function (){
        let _site = $(this).text();
        console.log($(this).text())
        localStorage.setItem('site',_site);
        location.hash = '#/index';
    })
    
}
export default {
    render
} 