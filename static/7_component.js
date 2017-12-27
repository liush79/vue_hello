/**
 * Created by seungho.ryu on 2017-12-24.
 */
window.onload = function() {
    Vue.component('my-component', {
       template: '<div>A custom component!</div>'
    });
    new Vue({
        el: '#vue_component'
    });
    // local compoent
    var child = {
        template: '<div>A Child component!</div>'
    };
    new Vue({
        el: '#local_component',
        components: {
            'my-local-component': child
        }
    });
    new Vue({
        el: '#other_component'
    });

    // simple counter
    var data = { counter: 0 };
    Vue.component('simple-counter', {
        template: '<button v-on:click="counter += 1">{{ counter }}</button>',
        data: function() {
            // return data; // 이걸 리턴하면 버튼3개 모두 같은 값으로 동작함.
            return {
                counter: 0  // 이걸 리턴하면 버튼3개 다른 객체를 리턴하는 것임..
            }
        }
    });
    new Vue({
       el: '#example-2'
    });
};
