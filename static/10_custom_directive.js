window.onload = function () {
    console.log('custom directive')
    Vue.directive('focus', {
        inserted: function (el) {
            console.log('set focus !')
            el.focus()
        }
    })

    new Vue({
        el: '#custom_directive',
        created: function () {
            console.log('created !!')
        }
    })

    Vue.directive('demo', {
        bind: function (el, binding, vnode) {
            var s = JSON.stringify
            el.innerHTML =
                'name: ' + s(binding.name) + '<br>' +
                'value: ' + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: ' + s(binding.arg) + '<br>' +
                'modifiers: ' + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
        }
    })

    new Vue({
        el: '#hook-arguments-example',
        data: {
            message: 'hello!'
        }
    })
}