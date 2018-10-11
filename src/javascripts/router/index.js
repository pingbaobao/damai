

class Route{
    constructor({initial}){
        this.initial=initial
    }
    init(){
        this.initialHash();
    }
    initialHash(){
        if(!location.hash){
            this.router=router;
            location.hash=this.initial;
        }
    }
    switch(path){//一个路由的开关
        location.hash=path;
    }
    refresh(){
        let hash=location.hash;
        if(!this.routes[hash]){
            location.hash=this.initial;
            return false;
        }
        this.routes[hash].render();
        this.switchTab();
    }
    switchTab(){
        $('.nav-link').each(function(item){
            if($(this).attr('path')==location.hash){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
            
        })
    }
    listenHashChange(){//监听hash的变化出发事件
        window.addEventListener('load',this.refresh().bind(this));

        window.addEventListener('load',this.refresh().bind(this));
    }
}