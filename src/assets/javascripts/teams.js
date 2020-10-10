//1.深拷贝
//递归的完整版本(考虑到了Symbol属性):
const cloneDeep1 = (target, hash = new WeakMap())=>{
    //WeakMp 只有get set has delete 四个函数可用
    //对于传入参数处理
    if(typeof target !== 'object' || target === null) {
        return target;
    }
    //哈希表中存在直接返回
    if(hash.has(target)) return hash.get(target);

    const cloneTarget = Array.isArray(target) ? [] : {};
    hash.set(target,cloneTarget);

    //针对Symbol属性
    //Object.getOwnPropertySymbols()可以返回对象自有的Symbol属性，原型链上的属性不会被获取。返回值是存储自有Symbol属性的数组。此方法是ES2015新增。
    const symKeys = Object.getOwnPropertySymbols(target);
    if(symKeys.length) {
        symKeys.forEach(symKey =>{
            if(typeof target[symKey] === 'object' && target[symKey]
            !== null) {
                cloneTarget[symKey] = cloneDeep1(target[symKey]);
            }else {
                cloneTarget[symKey] = target[symKey];
            }
        })
    }
    for(const i in target) {
        //hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
        if(Object.prototype.hasOwnProperty.call(target,i)) {
            cloneTarget[i] = typeof target[i] === 'object' && target[i] !== null
            ? cloneDeep1(target[i],hash) : target[i];
        }
    }
    return cloneTarget;
};
//2.JOSNP
//script标签不遵循同源协议，可以用来进行跨域请求，优点就是兼容性好但仅限于GET请求
const jsonp = ({url,params,callbackName})=>{
    const generateUrl = ()=>{
        let dataSrc = '';
        for(let key in params) {
            if(Object.prototype.hasOwnProperty.call(params,key)) {
                dataSrc += `${key}=${params[key]}&`;
            }
        }
        dataSrc += `callback=${callbackName}`;
        return `${url}?${dataSrc}`;
    };
    return new Promise((resolve,reject)=>{
        const scriptEle = document.createElement('script');
        scriptEle.src = generateUrl();
        document.body.appendChild(scriptEle);
        window[callbackName] = data => {
            resolve(data);
            document.removeChild(scriptEle);
        }
    })
};
//3. AJAX
const getJSON = function (url) {
 return new Promise((resolve,reject)=>{
     // eslint-disable-next-line no-undef
     const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
     xhr.open('GET',url,false);
     xhr.setRequestHeader('Accept','application/json');
     xhr.onreadystatechange = function () {
         if(xhr.readyState !== 4) return;
         if(xhr.status === 200 || xhr.status === 304) {
             resolve(xhr.responseText);
         }else{
             reject(new Error(xhr.responseText));
         }
     };
     xhr.send();
 });
};
//4. 图片懒加载
//可以给img标签统一自定义属性src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载
const lazyLoad = function () {
  const imgs = document.getElementsByTagName('img');
  const len = imgs.length;
  //视口的高度
    const viewHeight = document.documentElement.clientHeight;
    //滚动条高度
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for(let i =0;i<len;i++) {
        const offsetHeight = imgs[i].offsetTop;
        if(offsetHeight < viewHeight + scrollHeight) {
            const src = imgs[i].dataset.src;
            imgs[i].src = src;
        }
    }
};
//可以使用节流优化一下
//window.addEventListener('scroll',lazyLoad);
//5. 滚动加载
//原理就是监听页面滚动事件，分析clientHeight,scrollTop,scrollHeight三者的属性关系
window.addEventListener('scroll',function() {
   const clientHeight = document.documentElement.clientHeight;
   const scrollTop = document.documentElement.scrollTop;
   const scrollHeight = document.documentElement.scrollHeight;
   if(clientHeight + scrollTop >= scrollHeight) {
       //检测到滚动至页面底部，进行后续操作
       //...
   }
},false);
//6.渲染几万条数据不卡住页面
//渲染大数据时，合理使用createDocumentFragment 和 requestAnimationFrame，将操作切分为一小段，
//一小段执行
setTimeout(()=>{
    //插入十万条数据
    const total = 100000;
    //一次插入的数据
    const once = 20;
    //插入数据需要的次数
    const loopCount = Math.ceil(total / once);
    let countOfRender = 0;
    const ul = document.querySelector('ul');
    //添加数据的方法
    function add() {
        const fragment = document.createDocumentFragment();
        for(let i = 0;i < once; i++ ) {
            const li = document.createElement('li');
            li.innerText = Math.floor(Math.random() * total);
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
    }
    function loop() {
        if(countOfRender < loopCount) {
            window.requestAnimationFrame(add);
        }
    }
    loop();
},0);
//7 打印出当前网页使用了多少钟HTML元素
//一行代码可以解决
const fn = ()=> {
    return [...new Set([...document.querySelectorAll('*')].map(el=>el.tagName))].length;
};
//值得注意的是： DOM操作返回的是类数组，需要转化为数组之后才可以调用数组的方法
//8 将VirtualDom转化为真实DOM结构
//这是当前SPA应用的核心概念之一
//vnode结构：
/*
{
   tag,
   attrs,
   chlidren,
 }
 */
//Virtual DOM => DOM
function render(vnode,container) {
    container.appendChild(_render(vnode));

}
function _render(vnode) {
    //如果是数字类型转化为字符串
    if(typeof vnode === 'number') {
        vnode = String(vnode);
    }
    //字符串类型直接就是文本节点
    if(typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    //普通DOM
    const dom = document.createElement(vnode.tag);
    if(vnode.attrs) {
        //遍历属性
        Object.keys(vnode.attrs).forEach(key=>{
            const value = vnode.attrs[key];
            dom.setAttribute(key,value);
        })
    }
    //子数组进行递归操作
    vnode.children.forEach(child=>render(child.dom));
    return dom;
}
//9 字符串解析问题
// let a = {
//     b: 123,
//     c: '456',
//     e: '789'
// };
// let str =`a{a.b}aa{a.c}aa {a.d}aaa`;
//=>'a123aa45aa {a.d}aaaa'
/*
实现函数使得将str字符串中的{}内的变量替换，如果属性不存在保持原样（比如{a.d}）
类似于模板字符串，但有一点出入，实际上原理差不多
 */
const fn1 = (str,obj)=> {
    let res = '';
    //标志位，标志前面是否有{
    let flag = false;
    let start;
    for(let i = 0;i < str.length;i++ ) {
        if(str[i] === '{') {
            flag = true;
            start = i + 1;
            continue;
        }
        if (!flag) res += str[i];
        else {
            if(str[i] === '}') {
                flag = false;
                res += match(str.slice(start,i),obj);
            }
        }
    }
    return res;
};
//对象匹配操作
const match = (str,obj)=>{
    const keys = str.split('.').slice(1);
    let index = 0;
    let o = obj;
    while(index < keys.length) {
        const key = keys[index];
        if(!o[key]) {
            return `{${str}`;
        }else{
            o = o[key];
        }
        index++;
    }
    return o;
};
// 10 event 模块
//实现node中回调函数的机制， node中回调函数其实是内部使用了观察者模式
//观察者模式：定义了对象间一种一对多的依赖关系，当目标对象Subject发生改变时，所有依赖它的对象Observer都会得到通知
function EventEmitter() {
    this.events = new Map();
}
//需要实现的一些方法
//addListener removeListener once removeAllListener emit
//模拟实现addListener方法
const wrapCallback = (fn, once = false) =>({callback: fn, once});
EventEmitter.prototype.addListener = function(type,fn, once = false) {
    const hanlder = this.events.get(type);
    if(!hanlder) {
        //没有type绑定事件
        this.events.set(type, wrapCallback(fn, once));
    }else if(hanlder && typeof hanlder.callback === 'function') {
        //目前type事件只有一个回调
        this.events.set(type, [hanlder,wrapCallback(fn, once)]);
    }else {
        //目前type事件数>=2
        hanlder.push(wrapCallback(fn, once));
    }
};
//模拟实现removeListener
EventEmitter.prototype.removeListener = function(type, listener) {
    const handler = this.events.get(type);
    if(!handler) return;
    if(!Array.isArray(this.events)) {
        if(handler.callback === listener.callback) this.events.delete(type);
        else return;
    }
    for(let i = 0; i < handler.length;i++) {
        const item = handler[i];
        if(item.callback === listener.callback) {
            handler.splice(i,1);
            i--;
            if(handler.length === 1) {
                this.events.set(type, handler[0]);
            }
        }
    }
};
//模拟实现once方法
EventEmitter.prototype.once = function (type, listener) {
    this.addListener(type, listener, true);
};
//模拟实现emit方法
EventEmitter.prototype.emit = function (type, ...args) {
   const handler = this.events.get(type);
   if(!handler) return;
   if(Array.isArray(handler)) {
       handler.forEach(item=>{
           item.callback.apply(this.args);
           if(item.once) {
               this.removeListener(type, item);
           }
       })
   }else {
       handler.callback.apply(this, args);
       if(handler.once) {
           this.events.delete(type);
       }
   }
   return true;
};
EventEmitter.prototype.removeAllListeners = function (type) {
  const handler = this.events.get(type);
  if(!handler) return;
  this.events.delete(type);
};
export default {cloneDeep1,jsonp,getJSON,lazyLoad,fn,fn1}
