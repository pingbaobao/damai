import artist_template from '../../views/mine/my_attention_artist.html';


const render = () => {
    $('.like-scroller-container').html(artist_template);
}

export  default{
    render
}