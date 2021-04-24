
import * as ButtonCounter from "./components/ButtonCounter.js";
import * as CustomHeader from "./components/CustomHeader.js";
import * as HeroSection from "./components/HeroSection.js";


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        name: 'Elza',
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

