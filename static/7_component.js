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

    // ===================================== 중요 ======================================
    // component 생성보다 new Vue() 를 먼저하면 안됨 !! 이유가 뭔지?
    // new Vue({ el: '#base' });
    // =================================================================================
    Vue.component('props-child', {
        props: ['propsMessage'],
        template: '<span>{{ propsMessage }}</span>'
    });
    // Props
    new Vue({
        el: '#base',
        data: {
            parentMsg: ''
        }
    });

    // valid-example
    Vue.component('valid-ex', {
        props: {
            // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
            propA: Number,
            // 여러개의 가능한 타입
            propB: [String, Number],
            // 문자열이며 꼭 필요합니다
            propC: {
                type: String,
                required: true
            },
            // 숫자이며 기본 값을 가집니다
            propD: {
                type: Number,
                default: 100
            },
            // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
            propE: {
                type: Object,
                default: function () {
                    return {message: 'hello'}
                }
            },
            // 사용자 정의 유효성 검사 가능
            propF: {
                validator: function (value) {
                    return value > 10
                }
            }
        },
        template: '<span>{{ propA }}, {{ propC }}</span>'
    });
    Vue.component('bs-date-input', {
        template: '<input type="date" class="form-control">'
    });
    // Props
    new Vue({
        el: '#valid-example',
        data: {
            parentMsg: ''
        }
    });
};
