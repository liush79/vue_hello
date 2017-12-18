/**
 * Created by seungho.ryu on 2017-12-10.
 */

// 크롬에서 console 열고 아래처럼 테스트 해볼수 있음.
// 크롬에서 콘솔테스트 하려면 vuejs 홈페이지랑은 좀 다르게 객체를 아래처럼 __vue__ 를 붙여야만 함.
// app_test.__vue__.items
// Vue.set(example2.__vue__.example_items, 0, {message: 'Baz'})

window.onload = function () {
    // app_test:
    new Vue({
        el: '#app_test',
        data: {
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            obj: {
                firstName: 'John',
                lastName: 'Doe',
                age: 30
            },
            parentMessage: 'Parent 22222222',
            example_items: [
                { message: 'Foo ex' },
                { message: 'Bar ex' }
            ],
            userProfile: {
                name: 'seungho.ryu'
            },
            numbers: [1,2,3,4,5]
        },
        // console 열고 입력하면 추가되는것을 감지할수 있다.
        // Vue.set(ex_set_attr.__vue__.userProfile, 'age', 39);
        // 아래처럼 추가하면 추가되는것 감지 안됨.
        // ex_set_attr.__vue__.userProfile.a = '1234';
        methods: {
            add_attr: function () {
                // this.$set(this.userProfile, 'sex', 'M');
                this.userProfile = Object.assign({}, this.userProfile, {
                    age: 38,
                    favoriteColor: 'Blue'
                })
            },
            // evenNumbers를 호출하지만 console.log("computed evenNumbers") 가 안찍힘
            check_console: function() {
                console.log("check_even_number()");
                alert(this.evenNumbers);
            },
            // 하지만 numbers 가 변경되면 computed 가 자동으로 호출됨
            change_numbers: function () {
                this.numbers = [1,2,3,4,5,6];
            }
        },
        computed: {
            evenNumbers: function() {
                console.log("computed evenNumbers");
                return this.numbers.filter(function(number) {
                    return number % 2 === 0;
                })
            }
        }
    });

    Vue.component('todo-item', {
        template: '\
        <li>\
          {{ title }}\
          <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
      ',
        props: ['title']
    });

    new Vue({
        el: '#todo-list-example',
        data: {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes'
                },
                {
                    id: 2,
                    title: 'Take out the trash'
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4
        },
        methods: {
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                });
                this.newTodoText = ''
            }
        }
    })
};