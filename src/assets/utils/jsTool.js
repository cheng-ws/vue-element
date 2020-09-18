export default {
    setSession: function (name, value, type) {
        if (type) {
            sessionStorage.setItem(name, JSON.stringify(value));
        } else {
            sessionStorage.setItem(name, value);
        }
    },
    getSession: function (name, type) {
        if (type) {
            return JSON.parse(sessionStorage.getItem(name));
        } else {
            return sessionStorage.getItem(name);
        }
    },
    removeSession: function (name) {
        sessionStorage.removeItem(name);
    },
    //格式化输出
    outPut(status=200,data={},msg='') {
        return {status,data,msg};
    },
};