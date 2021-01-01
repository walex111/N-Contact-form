const email = document.getElementById('email');
const number = document.getElementById('number');
const selectBtn = document.getElementById('select-btn');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (email.value === '' || email.value === null) {
        messages.push('Email is required!');
    }

    if (number.value.length < 10 || number.value.length < 10) {
        messages.push('Phone Number invalid!');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})