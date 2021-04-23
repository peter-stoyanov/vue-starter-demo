var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        name: 'Pesho',
        inputValue: ''
    },
    methods: {
        logInTheConsole() {
            console.log('somebody triggered the function');
        },
        savetoDatabase() {
            // send data to database
        },
        changeName() {
            this.name = 'Nina';
        },
        takeValueFromInputAndPrintInParagraph() {
            this.name = this.inputValue;
        }
    }
});

// console.log({app});


