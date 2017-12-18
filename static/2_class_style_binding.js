/**
 * Created by seungho.ryu on 2017-12-10.
 */

window.onload = function () {
    // app1: class binding
    new Vue({
        el: '#app1',
        data: {
            isActive: true,
            hasError: false
        }
    });
    // app2: style binding
    new Vue({
        el: '#app2',
        data: {
            activeColor: 'red',
            fontSize: 30
        }
    });
    // app3: style object binding
    new Vue({
        el: '#app3',
        data: {
            styleObject: {
                color: 'blue',
                fontSize: '13px'
            }
        }
    })
};