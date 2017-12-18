/**
 * Created by seungho.ryu on 2017-09-25.
 */

window.onload=function() {
    // button click event
    new Vue({
        el: '#ex-1',
        data: {
            counter: 0
        }        
    });

    // method event handler
    var ex2 = new Vue({
        el: '#ex-2',
        data: {
            name: 'seungho.ryu'
        },
        methods: {
            greet: function(event) {
                alert('Hello ' + this.name + '!');
                if (event)
                    alert(event.target.tagName);
            }
        }
    });
    // you can call it by javascript.
    ex2.greet();

    // inline method handler
    new Vue({
        el: '#ex-3',
        methods: {
            say: function (message) {
                alert(message);
            },
            warn: function(message, event) {
                if (event)
                    event.preventDefault();
                alert(message);
            }
        }
    })
};
