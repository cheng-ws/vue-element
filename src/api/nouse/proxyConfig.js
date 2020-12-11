import config from './config';

module.exports = {
    proxy: {
        [config.ROOT]: {
            target: config.PROXYROOT, //将www.exaple.com映射为/api
            secure: false, //如果是https接口，需要配置这个参数
            changeOrigin: true,//是否跨域
            pathRewrite: {
                [`^${config.ROOT}`]: '', //需要rewite的
            }
        },
    }
};