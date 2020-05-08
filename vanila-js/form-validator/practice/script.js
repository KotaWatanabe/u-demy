const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message
}

const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

const getFieldName = input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkEmail = input => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

const checkRequired = (inputs) => {
    inputs.forEach(input => {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

const checkLength = (input, min, max)=> {
    console.log(input.value)
    const value = input.value;
    if(value.trim().length < min) {
        showError(input, `${getFieldName(input)} should have at least ${min} charcters`)
    } else if(value.trim().length > max) {
        showError(input, `${getFieldName(input)} must shorter than ${max} charcters`)
    }
}

const checkPasswordMatch = (input1, input2) => {
    if(input1.value.trim() !== input2.value.trim()) {
        showError(input2, 'password do not match')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 10);
    checkLength(password, 6, 15);
    checkEmail(email);
    checkPasswordMatch(password, password2)
})
