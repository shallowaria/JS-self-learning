import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch, loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/car.js'
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//async = return a promise,只接受promise不接受callback
async function loadPage() {
    //await = .then(() => {});只能在async中使用
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
    })

    renderOrderSummary();
    renderPaymentSummary();

    // 此处return === resolve
    //return 'value2';
}
loadPage()

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/* callback嵌套太多，石山代码
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/

