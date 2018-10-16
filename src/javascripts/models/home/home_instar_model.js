// 提供职位信息数据
const home_instar_list = () => {
    return $.ajax({
        // url: '/static/mock/list.json',
        url: '/api/home/instar',
        success: (res) => {
            return res;
        }
    })
}
export default {
    home_instar_list,
}