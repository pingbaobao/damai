
const instar = require('./home/instar.json');
const recommend = require('./home/recommend.json');
//全部
const all_list = require ('./category/all_list.json');
const all_list_time = require ('./category/all_list_time.json');
//演唱会
const concert_list = require ('./category/concert_list.json');
const concert_list_time = require ('./category/concert_list_time.json');
//话剧歌剧
const opera_list = require('./category/opera_list.json');
const opera_list_time = require ('./category/opera_list_time.json');
//音乐会
const music_list = require ('./category/music_list.json');
const music_list_time = require ('./category/music_list_time.json');

module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        instar: instar,
        recommend:recommend,
        all_list : all_list,
        all_list_time : all_list_time,
        concert_list : concert_list,
        concert_list_time : concert_list_time,
        opera_list: opera_list,
        opera_list_time : opera_list_time,
        music_list : music_list,
        music_list_time : music_list_time
    }
}