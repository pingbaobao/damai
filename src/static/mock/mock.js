

const opera_list = require('./category/opera_list.json');
const opera_list_time = require ('./category/opera_list_time.json')

module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        opera_list: opera_list,
        opera_list_time : opera_list_time
    }
}