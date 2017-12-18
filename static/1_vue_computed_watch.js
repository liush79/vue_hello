/**
 * Created by seungho.ryu on 2017-09-25.
 */

window.onload=function() {
    var app = new Vue({
        el: '#app',
        data: {
            message: '안녕하세요 Vue!'
        }
    });

    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                {text: 'JavaScript 배우기'},
                {text: 'Vue 배우기'},
                {text: '무언가 멋진 것을 만들기'}
            ]
        }
    });

    // button click event
    var app5 = new Vue({
        el: "#app-5",
        data: {
            message: "hello ~?"
        } ,
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    });

    // watch
    var vm = new Vue({
        el: '#demo',
        data: {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        },
        watch: {
            firstName: function (val) {
                this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
                this.fullName = this.firstName + ' ' + val
            }
        }
    });

    // template
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });

    // v-for
    var app7 = new Vue({
      el: '#app-7',
      data: {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    });

    // created hook: 인스턴스가 생성된 후에 호출.
    new Vue({
      data: {
        a: 1
      },
      created: function () {
        // `this` 는 vm 인스턴스를 가리킵니다.
        console.log('a is: ' + this.a)
      }
    });
    
    // computed getter
    var vm1 = new Vue({
      el: '#example',
      data: {
        message: '안녕하세요'
      },
      computed: {
        // 계산된 getter
        reversedMessage: function () {
          // `this` 는 vm 인스턴스를 가리킵니다.
          console.log('aaaa');
          return this.message.split('').reverse().join('')
        }
      },
        methods: {
            reverseMsg: function() {
                return this.reversedMessage;
            }
        }
    });
    vm1.message = 'good bye~';

};
