import "./styles.css";

const email = document.getElementById('email');
const emailLabel = document.getElementById('emailLabel');
const emailError = document.getElementById('emailError');
let emailPass = false; 

const phoneNumber = document.getElementById('phoneNumber');
const phoneNumberLabel = document.getElementById('phoneNumberLabel');
const phoneNumberError = document.getElementById('phoneNumberError');
let phoneNumberPass = false; 

const username = document.getElementById('username');
const usernameLabel = document.getElementById('usernameLabel');
const usernameError = document.getElementById('usernameError');
let usernamePass = false; 

const password = document.getElementById('password');
const passwordLabel = document.getElementById('passwordLabel');
const passwordError = document.getElementById('passwordError');
let passwordPass = false; 

const zipcode = document.getElementById('zipcode');
const zipcodeLabel = document.getElementById('zipcodeLabel');
const zipcodeError = document.getElementById('zipcodeError');
let zipcodePass = false; 

const submit = document.getElementById('submitButton');

username.onblur = function() {
    if(validateUsername(username.value) === true || username.value === "") {
        usernameLabel.style.color = 'white';
        usernameError.style.visibility = 'hidden';
    }
    else {
        usernameLabel.style.color = '#dc2626';
        usernameError.style.visibility = 'visible';
    }
}

password.onblur = function() {
    if(validatePassword(password.value) === true || password.value === "") {
        passwordLabel.style.color = 'white';
        passwordError.style.visibility = 'hidden';
    }
    else {
        passwordLabel.style.color = '#dc2626';
        passwordError.style.visibility = 'visible';
    }
}

zipcode.onblur = function() {
    if(validateZipCode(zipcode.value) === true || zipcode.value === "") {
        zipcodeLabel.style.color = 'white';
        zipcodeError.style.visibility = 'hidden';
    }
    else {
        zipcodeLabel.style.color = '#dc2626';
        zipcodeError.style.visibility = 'visible';
    }
}

phoneNumber.onblur = function() {
    if(validatePhoneNumber(phoneNumber.value) === true || phoneNumber.value === "") {
        phoneNumberLabel.style.color = 'white';
        phoneNumberError.style.visibility = 'hidden';
    }
    else {
        phoneNumberLabel.style.color = '#dc2626';
        phoneNumberError.style.visibility = 'visible';
    }
}

email.onblur = function() {
    if(validateEmail(email.value) === true || email.value === "") {
        emailLabel.style.color = 'white';
        emailError.style.visibility = 'hidden';
    }
    else {
        emailLabel.style.color = '#dc2626';
        emailError.style.visibility = 'visible';
    }
}

submit.onclick = function() {
    if(usernamePass === true && passwordPass === true && zipcodePass === true && phoneNumberPass === true && emailPass === true) {
        alert("Items Submitted");
    }
    else {
        alert('Some items are incorrect or missing');
    }
}

function validateUsername(text) {
    if(/^.{3,}$/.test(text) === true) {
        usernamePass = true; 
        return true; 
    }
    else {
        usernamePass = false; 
        return false; 
    }
}

function validatePassword(text) {
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(text) === true) {
        passwordPass = true;
        return true; 
    } 
    else {
        passwordPass = false;
        return false;
    }
}

function validateZipCode(number) {
    if(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(number) === true) {
        zipcodePass = true;
        return true;
    }
    else {
        zipcodePass = false;
        return false; 
    }
}

function validatePhoneNumber(number) {
    if(/^\d{10}$/.test(number) === true) {
        phoneNumberPass = true; 
        return true; 
    }
    else {
        phoneNumberPass = false;
        return false; 
    }
}

function validateEmail(text) {
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text) === true) {
        emailPass = true;
        return true;
    }
    else {
        emailPass = false; 
        return false; 
    }
}