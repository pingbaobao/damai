import citySite_template from '../../views/citySite/citySite.html';
import BScroll from 'better-scroll';
const render = () => {
    $('#root').html(citySite_template);
    const _locationScroll = new BScroll('.city-wrapper', {
    probeType:2,
    scrollY: true,
    click: true
    });
}
export default {
    render
} 