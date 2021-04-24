// naming is PascalCase
// create global component
Vue.component('button-counter', {
    data: function () { // best practice
        return {
            count: 0
        }
    },
    template: '<button @click="count++">You clicked me {{ count }} times.</button>'
})