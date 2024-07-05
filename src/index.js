const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkForm()

});

username.addEventListener('blur', () => {

    checkInputUsername()
})

email.addEventListener('blur', () => {

    checkInputEmail()
})


function checkInputUsername() {
    const usernameValue = username.value.trim();

    if (usernameValue === '') {
        errorInput(username, 'Required');

    } else {
        const formItem = username.parentElement;
        formItem.className = 'form-content'
    }
};

function checkInputEmail() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        errorInput(email, 'Required');

    } else {
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }
}

function checkInputPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        errorInput(password, 'Required');

    } else if (passwordValue.length < 8) {
        errorInput(password, 'Must contain at least 8 characters')

    } else {
        const formItem = password.parentElement;
        formItem.className = 'form-content'
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationValue = passwordConfirmation.value.trim();

    if (confirmationValue === '') {
        errorInput(passwordConfirmation, 'You must confirm your password')

    } else if (confirmationValue !== passwordValue) {
        errorInput(passwordConfirmation, 'Passwords do not match')

    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = 'form-content'
    }

}


function checkForm() {

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll('.form-content')


    const isValid = [...formItems].every((item) => {
        return item.className === 'form-content'
    })

    if (isValid) {
        alert('Cadastraso com Sucesso!')

    } // else {
    //     alert('Preencha todos os campos corretamente!')
    // }
}


function errorInput(input, message) {

    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a');

    textMessage.innerText = message;
    formItem.className = 'form-content error';

};

//37:53