
const instar = require('./home/instar.json');
const recommend = require('./home/recommend.json');
module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/insatr -> instar
        instar: instar,
        recommend:recommend
    }
}