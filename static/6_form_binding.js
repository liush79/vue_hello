/**
 * Created by seungho.ryu on 2017-12-24.
 */
window.onload = function() {
    new Vue({
        el: '#form-binding',
        data: {
            a: 'DDDD',
            message: '',
            message2: '',
            // ================ checkbox ================
            vchecked: true,
            names: [],
            // ================ radio ================
            picked: '',
            // ================ select ================
            selected: '',
            // ================ select with for ================
            select_with_for: 'A',
            options: [
                {text: 'One', value: 'A'},
                {text: 'Two', value: 'B'},
                {text: 'Three', value: 'C'}
            ],
            lazy_msg: '',
            number_msg: '',
            trim_msg: '',
        }
    });
};
