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
    // =============================================================================
    Vue.component('button-counter', {
        template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
        data: function () {
            return {
                counter: 0
            }
        },
        methods: {
            incrementCounter: function () {
                this.counter += 1;
                this.$emit('increment');
            }
        }
    });

    new Vue({
        el: '#counter-event-example',
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function () {
                this.total += 1
            }
        }
    });

    // =============================================================================
    // sync example
    Vue.component('sync-test', {
        template: '<button @click="update_foo">update foo & bar</button>',
        props: ['foo'],
        methods: {
            update_foo: function () {
                this.$emit('update:foo', 'defg')
            }
        }
    });
    new Vue({
        el: '#sync_example',
        data: {
            bar: 'abc'
        }
    });
    // =============================================================================
    // custom events
    Vue.component('currency-input', {
        template: '\
           <span>\
            $\
            <label v-if="label">{{ label }}</label>\
            <input\
                ref="input"\
                v-bind:value="value"\
                v-on:input="updateValue($event.target.value)">\
            </span>',
        props: {
            'value': { type: Number, default: 0 },
            'label': { type: String, default: '' }
        },
        methods: {
            // 값을 직접 업데이트하는 대신 이 메소드를 사용하여
            // 입력 값에 대한 서식을 지정하고 배치 할 수 있습니다
            updateValue: function (value) {
                var formattedValue = value.trim()
                    // 소수 자릿수 2자리로 줄입니다
                    .slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3);
                // 값이 아직 정규화 되지 않은 경우
                // 이를 수동으로 재정의하여 조건을 충족시킵니다.
                if (formattedValue !== value) {
                    this.$refs.input.value = formattedValue
                }
                // 입력 이벤트를 통해 숫자 값을 내보냅니다.
                this.$emit('input', Number(formattedValue))
            }
        }
    });
    new Vue({
        el: '#custom_events',
        data: {
            price: 0,
            tax: 0
        },
        computed: {
            total: function() {
                return this.price + this.tax;
            }
        }
    });
    // custom v-model
    // 어떻게 하는지 모르겠음.
    // Vue.component('my-checkbox', {
    //     template: '<input type="checkbox" :checked="foo">',
    //     model: {
    //         prop: 'checked',
    //         event: 'change'
    //     },
    //     props: {
    //         checked: Boolean,
    //         value: String
    //     }
    // });
    // new Vue({
    //     el: '#custom_v_model',
    //     data: {
    //         foo: '123'
    //     }
    // });
    // component 간 통신 (event bus)
    var bus = {
        state: { message: 'bus message' }
    };

    var vmA = new Vue({
        el: '#app_a',
        data: {
            a_state: { value: "AAAAA" },
            bus_state: bus.state
        }
    });

    var vmB = new Vue({
        el: '#app_b',
        data: {
            b_state: { value: "BBBBB" },
            bus_state: bus.state
        }
    });
    // =============================================================================
    // slot
    // 아래 <slot> 부분은
    // html 에서 <test-slot> 사이에 아무것도 없을때만 나옴.
    Vue.component('test-slot', {
        template: '\
        <div>\
            <h2>나는 자식 컴포넌트의 제목입니다.</h2>\
            <slot>나는 \'slot\' 입니다.제공된 컨텐츠가 없는 경우만 볼수 있습니다.</slot>\
        </div>\
        '
    });
    Vue.component('named-slot', {
        template: '\
        <div class="container">\
            <header>\
                <slot name="header"></slot>\
            </header>\
            <main>\
                <slot></slot>\
            </main>\
            <footer>\
                <slot name="footer"></slot>\
            </footer>\
        </div>'
    });
    Vue.component('scope-slot', {
        template: '\
        <div class="child">\
            <slot text="hello from CHILD"></slot>\
        </div>\
        '
    });
    Vue.component('my-awesome-list', {
        template: '\
        <ul>\
            <slot name="item"\
                  v-for="item in items"\
                  :text="item.text">\
            <!-- 대체 컨텐츠는 여기입니다. -->\
            </slot>\
        </ul>\
        ',
        props: ['items']
    });
    new Vue({
        el: '#test_slot_component',
        data: {
            awesome_list_items: [
                {text: '123'},
                {text: '456'},
                {text: 'abc'},
                {text: 'def'}
            ]
        }
    });
    // ============================== dynamic component =================================
    // dynamic component
    // 콘솔창을 열고
    // dynamic_component.__vue__.currentView = 'archive' 라고하면 component 가 변경되는 것을 확인할 수 있다.
    var vm_dynamic = new Vue({
        el: '#dynamic_component',
        data: {
            currentView: 'home'
        },
        components: {
            home: {
                template: '<p>This is \'home\'</p>'
            },
            posts: {
                template: '<p>This is \'posts\'</p>'
            },
            archive: {
                template: '<p>This is \'archive\'</p>'
            }
        }
    })
    // =============================================================================
    // recursive component
    var recursive_data = {
        name: 'My Tree',
        children: [
            { name: 'hello' },
            { name: 'wat' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    },
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    }
                ]
            },
            { name: 'hello2' },
            { name: 'wat2' },
        ]
    }
    // define the item component
    // reference: https://vuejs.org/v2/examples/tree-view.html
    Vue.component('recursive-item', {
        // x-templates rendering
        // https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d
        template: '#recursive_template',
        props: {
            model: Object
        },
        data: function () {
            // component 에서는 항상 object 처럼 리턴해야함.
            return {
                open: false
            }
        },
        computed: {
            isFolder: function () {
                console.log('computed_isFolder / name: ' + this.model.name)
                return this.model.children &&
                    this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            }
        }
    })

    // boot up the demo
    var demo = new Vue({
        el: '#recursive_demo',
        data: {
            treeData: recursive_data
        }
    })
    // =============================================================================
    // inline template
    Vue.component('my-inline-component', {
        data: function () {
            return {
                title: '인라인 component의 데이터 입니다.'
            }
        }
    })
    new Vue({
        el: '#inline_component'
    })
};
