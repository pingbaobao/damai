

import order_template from '../../views/mine/my_order_controller.html';

const render = () => {
    document.querySelector('title').innerHTML = '我的订单';
    let _template = Handlebars.compile(order_template);
    let _html = _template({
        _job_list: [{
            favourable: "",
            promotionTags: [],
            logicLabelInfo: {},
            siteStatus: 3,
            isEticket: false,
            collectNum: 0,
            recReasonType: 1,
            tours: "",
            cityName: "北京",
            subTitle: "2018“与牠同行”大型公益演唱会",
            venueId: 27,
            subHead: "主演演员：老狼、马条、臧鸿飞、郝云、李文琦等",
            id: 165668,
            isSelectSeat: false,
            venueCity: "北京",
            actores: "艺人: 郝云、老狼",
            nearestPerformTime: 1541764800000,
            isNewItem: 0,
            showTag: "",
            showTime: "2018.11.09  20:00",
            logicAddress: "北京",
            ipvuv: 4733,
            isAtmospheric: false,
            venueName: "糖果TANGO-雍和宫店三层",
            priceStr: "150-180",
            isGeneralAgent: true,
            tourProjects: [],
            recReason: "阵容大咖：郝云、老狼",
            name: "2018“与牠同行”大型公益演唱会",
            verticalPic: "https://pimg.dmcdn.cn/perform/project/1656/165668_n.jpg?_t=1539252131627",
            formattedPriceStr: "150-180" 

        }]


    })

    $('#root').html(_html);
    
}

export default {
    render
}