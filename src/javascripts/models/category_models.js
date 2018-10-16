//提供演唱会信息数据
const project_list = () =>{
    return $.ajax({
        url : '/api/category/opera_list',
        success : (res) => {
            console.log('ok');
            return res;
        }
    })
}

const project_refresh = () =>{
    return $.ajax({
        url : '/api/category/opera_list_time',
        success : (res) => {
            return res;
        }
    })
}

export default {
    project_list,
    project_refresh
}