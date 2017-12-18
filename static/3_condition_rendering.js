/**
 * Created by seungho.ryu on 2017-12-10.
 */

window.onload = function () {
    // app_test:
    new Vue({
        el: '#app_test',
        data: {
            ok: true,
            type: 'B',
            loginType: 'username'
        },
        methods: {
            change_login_type: function(type) {
                if (type == 'username')
                    this.loginType = 'email';
                else
                    this.loginType = 'username';
            }
        }
    });
};