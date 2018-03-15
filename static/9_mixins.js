window.onload = function () {
    // mixin obejct definition
    console.log('1_start')
    var myMixin = {
        created: function() {
            console.log('4_created_myMixin')
            this.hello()
        },
        methods: {
            hello: function () {
                console.log('5_hello from mixins !!')
            }
        }
    }
    console.log('2_MyComponent extends from myMixin')
    var MyComponent = Vue.extend({
        mixins: [myMixin]
    })

    console.log('3_New MyComponent')
    var component = new MyComponent()

    console.log('6_option mix')
    var mixinnn = {
        created: function() {
            console.log('mixin hook called !!')
        }
    }

    new Vue({
        mixins:[mixinnn],
        created: function () {
            console.log('component hook called !!')
        }
    })

    var mixin3 = {
        methods: {
            foo: function() {
                console.log('foo !!')
            },
            conflicting: function() {
                console.log('conflicting() of mixin3')
            }
        }
    }

    var vm_mixin3 = new Vue({
        mixins: [mixin3],
        methods: {
            conflicting: function() {
                console.log('conflicting() of vm_mixin3')
            }
        }
    })
    vm_mixin3.foo()
    vm_mixin3.conflicting()

    Vue.mixin({
        created: function () {
            console.log('GLOBAL create!')
            var myOption = this.$options.myOption
            if (myOption) {
                console.log('GLOBAL + ' + myOption)
            }
        }
    })

    new Vue({})     // GLOBAL create!
    new Vue({})     // GLOBAL create!
    new Vue({       // GLOBAL create!
        myOption: 'hello!'       // GLOBAL + hello!
    })

}