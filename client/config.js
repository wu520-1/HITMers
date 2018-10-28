let host;
let env = 'production';

if(env === 'production') {
  host = 'https://hitmers-api.solotime.xyz';
} else {
  host = wx.getSystemInfoSync().model === 'iPhone 5' ? 'http://localhost:5757': 'https://hitmers-api.solotime.xyz';
}

let apiPath = `${host}/v1`;

var config = {
  env: env,
  service: {
    host,

    register: `${apiPath}/register`,
    login: `${apiPath}/login`,
    user: `${apiPath}/user`,
    userAll: `${apiPath}/user/all`,
    check: `${apiPath}/check`,
    shift: `${apiPath}/shift`,
    notice: `${apiPath}/notice`,
    video: `${apiPath}/video`,
    
    stream: 'https://hitmers-api.solotime.xyz/videos',
    streamCDN: 'cdn-b-east.streamable.com/video/mp4',
    streamCDNProxy: 'hitmers-api.solotime.xyz/mp4',

    html2pdf: 'https://html-pdf-api.herokuapp.com/api/render',
    wxKxjs: 'https://weixin.hit.edu.cn/app/kxjscx/kxjscxapp/getKxjs'
  }
};

module.exports = config;
