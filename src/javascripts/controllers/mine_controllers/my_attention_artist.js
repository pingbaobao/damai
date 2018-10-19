const artist_template = require('../../views/mine/my_attention_artist.html');

const render = () => {
    $('.like-scroller-container').html(artist_template);
}

module.exports = {
    render
}