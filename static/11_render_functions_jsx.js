window.onload = function () {
    console.log('render function & JSX')

    Vue.component('anchored-heading', {
        render: function (createElement) {
            return createElement('h' + this.level, this.$slots.default)
        },
        props: {
            level: {
                type: Number,
                requeired: true
            }
        }
    })
    
    new Vue({
        el: '#render_vue',
    })    
}
