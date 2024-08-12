

const myfunction = () => {
    // REGEXP
    let nameRegExp = /^[A-Za-z]+$/;

    let employeeName = document.querySelector("#employee-name").value;
    let username = document.querySelector("#username").value;
    let contact = document.querySelector("#contact").value;

    document.querySelector("#email-error").innerHTML = "";
    document.querySelector("#username-error").innerHTML = "";
    document.querySelector("#contact-error").innerHTML = "";

    // Employee Name
    if (employeeName == "") {
        document.querySelector("#email-error").innerHTML = "Please fill in the employee name.";
        return false;
    } else if (employeeName.length < 3) {
        document.querySelector("#email-error").innerHTML = "Employee name must be at least 3 characters.";
        return false;
    } else if (employeeName.length > 20) {
        document.querySelector("#email-error").innerHTML = "Employee name must be less than 20 characters.";
        return false;
    } else if (!employeeName.match(nameRegExp)) {
        document.querySelector("#email-error").innerHTML = "Employee name must contain only alphabets.";
        return false;
    }

    // Username
    if (username == "") {
        document.querySelector("#username-error").innerHTML = "Please fill in the username.";
        return false;
    } else if (username.length < 3) {
        document.querySelector("#username-error").innerHTML = "Username must be at least 3 characters.";
        return false;
    } else if (username.length > 15) {
        document.querySelector("#username-error").innerHTML = "Username must be less than 15 characters.";
        return false;
    } else if (!username.match(nameRegExp)) {
        document.querySelector("#username-error").innerHTML = "Username must contain only alphabets.";
        return false;
    }

    // Contact Number
    if (contact == '') {
        document.querySelector("#contact-error").innerHTML = "Please fill in the contact number.";
        return false;
    }
    if (isNaN(contact)) {
        document.querySelector("#contact-error").innerHTML = "Enter only numeric values.";
        return false;
    }
    if (contact.length !== 11) {
        document.querySelector("#contact-error").innerHTML = "Mobile number must be 11 digits.";
        return false;
    }
    if (contact.substring(0, 2) !== '92') {
        document.querySelector("#contact-error").innerHTML = "Mobile number must start with 92.";
        return false;
    }

    return true;
}
