//提供演唱会信息数据
const project_list = (item="all") =>{
    return $.ajax({
        url : '/api/category/'+item+'_list',
        success : (res) => {
            //console.log('ok');
            return res;
        }
    })
}

const project_refresh = (item="all") =>{
    return $.ajax({
        url : '/api/category/'+item+'_list_time',
        success : (res) => {
            return res;
        }
    })
}

export default {
    project_list,
    project_refresh
}