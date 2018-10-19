import perform_template from '../../views/perform/perform.html';
import perform_content_template from '../../views/perform/perform-content.html'

const render = () => {
    $('#root').html(perform_template );
    getPerformContent();
}

const getPerformContent = () =>{
    let index = sessionStorage.getItem("index");
    let datasources =  JSON.parse(sessionStorage.getItem("data"));
    let main = datasources[index];
    //console.log(main);
    let _template = Handlebars.compile(perform_content_template);
    let _html = _template(main);
    $('.main').html(_html);
    control();
}

const control = () => {
    $('#root').on('click','.ticketinfo',function(){
        $('.ticket-info-popup').css('display','block');
        setTimeout(function(){
            $('.ticket-info-popup').addClass('dm-popup').addClass('dm-popup-bottom');
            $('.cover').addClass('v-modal');
        },0)
        
    })
    $('#root').on('click','.cover',function(){
        $('.ticket-info-popup').css('display','none');
        $('.project-promotion-popup').css('display','none');
        $('.ticket-info-popup').removeClass('dm-popup').removeClass('dm-popup-bottom');
        $('.project-promotion-popup').removeClass('dm-popup').removeClass('dm-popup-bottom');
        $(this).removeClass('v-modal');
    })
    $('#root').on('click','.dm-promotion',function(){
        $('.project-promotion-popup').css('display','block');
        setTimeout(function(){
            $('.project-promotion-popup').addClass('dm-popup').addClass('dm-popup-bottom');
            $('.cover').addClass('v-modal');
        },0)
        
    })
}



export default { render }