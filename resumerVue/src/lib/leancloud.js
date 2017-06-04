import AV from 'leancloud-storage'

var APP_ID = 'WSsnUlwuFHbk64s3cw9SSUeT-gzGzoHsz'
var APP_KEY = 'nJgP8mif0960eisS3KNiEXki'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default AV

const map = {
    202: '用户名已被占用',
    210: '用户名和密码不匹配，请重试',
    127: '无效的用户名',
    unknown: '组册失败，稍后重试'
}

var getErrorMsg = function({code}) {
    return map[code] || map.unknown
}

var getAVUser = function(user) {
    var {id, attributes:{username}} = user || AV.User.current() || {attributes: {}}
    return {id, username}
}    
export { getErrorMsg, getAVUser }