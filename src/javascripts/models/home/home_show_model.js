// 提供职位信息数据
const home_show_list = () => {
    return $.ajax({
        // url: '/static/mock/list.json',
        url: '/api/home/recommend',
        success: (res) => {
            return res;
        }
    })
}
export default {
    home_show_list,
}