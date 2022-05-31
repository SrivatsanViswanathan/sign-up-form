const submit = document.getElementById('submit');

submit.addEventListener('click', validate);

function validate() {
    const number = /\d/g;
    const special = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    const letter = /([A-Z,a-z])/g;
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const error = document.getElementById('error');
    const cError = document.getElementById('cError');
    let mismatch = true;
    let valid = false;
    if (password.value === confirmPassword.value) {
        mismatch = false;
        cError.textContent = ''
        cError.style.opacity = '0';
        password.style.borderColor = 'gray';
        confirmPassword.style.borderColor = 'gray';
    }
    if (number.test(password.value) && special.test(password.value) && letter.test(password.value)) {
        valid = true;
        error.textContent = ''
        error.style.opacity = '0';
        password.style.borderColor = 'gray';
        confirmPassword.style.borderColor = 'gray';
    }

    if (mismatch) {
        cError.textContent = '* Passwords do not match.'
        cError.style.opacity = '1';
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    }
    if (!valid) {
        error.textContent = '* Password must contain at least 1 number, letter, and special character'
        error.style.opacity = '1';
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    }
    return false;
}