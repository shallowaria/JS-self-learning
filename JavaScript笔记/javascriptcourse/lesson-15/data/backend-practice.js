// XMLHttpRequest
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
//Status Code 4 5开头出错，4是前端问题，5是后端的问题，2开头成功
// API: 交互
//可接受 text/json/image
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
// 用GetRequest和在浏览器上输入网址效果一样,不过浏览器可以根据不同的数据做出不同的反应