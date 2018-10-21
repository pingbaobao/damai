import perform_template from '../../views/perform/perform.html';
import perform_content_template from '../../views/perform/perform-content.html'

const render = () => {
    document.querySelector('title').innerHTML='详情';
    $('#root').html(perform_template );
    getPerformContent();
}


const getPerformContent = () =>{
    //console.log(main);
    let index = sessionStorage.getItem("index");
    let datasources =  JSON.parse(sessionStorage.getItem("data"));
    let main = datasources[index];
    let _template = Handlebars.compile(perform_content_template);
    let _html = _template(main);
    $('.main').html(_html);
    control();
}


const control = () => {
    
    $('#root').on('click','.ticketinfo',function(){
        $('.ticket-info-pop').css('display','block');
        setTimeout(function(){
            $('.ticket-info-pop').addClass('dm-pop').addClass('dm-pop-bottom');
            $('.cover').addClass('v-modal');
        },0)
        
    })
    $('#root').on('click','.cover',function(){
        $('.ticket-info-pop').css('display','none');
        $('.project-promotion-pop').css('display','none');
        $('.ticket-info-pop').removeClass('dm-pop').removeClass('dm-pop-bottom');
        $('.project-promotion-pop').removeClass('dm-pop').removeClass('dm-pop-bottom');
        $(this).removeClass('v-modal');
    })
    $('#root').on('click','.dm-promotion',function(){
        $('.project-promotion-pop').css('display','block');
        setTimeout(function(){
            $('.project-promotion-pop').addClass('dm-pop').addClass('dm-pop-bottom');
            $('.cover').addClass('v-modal');
        },0)
    })

    
    let index = sessionStorage.getItem("index");
    let datasources =  JSON.parse(sessionStorage.getItem("data"));
    let main = datasources[index];
    let projectMain = [];
    if(JSON.parse(sessionStorage.getItem("projectMain"))!=null){
        projectMain=JSON.parse(sessionStorage.getItem("projectMain"))
    }
    let phone =  JSON.parse(sessionStorage.getItem("phone"));
    $('.foot-wrapper').on('click','.button-group__btn1',function(){
        if(phone != null){
            projectMain.push(main)
            let str = JSON.stringify(projectMain);
            sessionStorage.setItem("projectMain", str);
            $('.buy-cover').fadeIn();
            setTimeout(()=>{
                $('.buy-cover').fadeOut();
            },2000)
        }else{
            $(location).prop('href', 'http://localhost:8080/#/login');
        }
    })

    $('.foot-wrapper').on('click','.button-group__btn',function(){
        $(location).prop('href', 'http://localhost:8080/#/home');
    })
}



export default { render }