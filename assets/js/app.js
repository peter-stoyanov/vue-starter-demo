
import * as ButtonCounter from "./components/ButtonCounter.js";
import * as CustomHeader from "./components/CustomHeader.js";
import * as HeroSection from "./components/HeroSection.js";
import * as WhyUsSection from "./components/WhyUsSection.js"
import * as AboutSection from "./components/AboutSection.js"
import * as ClientsSection from "./components/ClientsSection.js"



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

