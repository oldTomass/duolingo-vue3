// 公共的api配置
const base={

// OpenAI 端地址
host:"http://localhost:10086",
// OpenAI
chatText:'/api/chatText',

// Duolingo 服务器端地址
// host:"http://localhost:9009",
// Duolingo
login:'/api/user/login',
register:'/api/user/register',
home:'/api/', //测试  Get 首页数据(后端返回Users)
errors:'/api/error', // Get /error/{uid}
sentences:'/api/sentence' , // Get /sentence/{contentType}/{contentLevel}/{page}

}

export default base
