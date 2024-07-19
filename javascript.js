//Scripts for register
function validateForm(event) {
    event.preventDefault();
    const fields = ['name', 'email', 'address', 'city', 'province', 'postalCode'];
    let valid = true;

    fields.forEach(function(field) {
        const input = document.getElementById(field);
        if (!input.value) {
            input.classList.add('error');
            valid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (valid) {
        document.getElementById('registerForm').submit();
    } else {
        alert("All fields must be filled out");
    }
}

document.getElementById('registerForm').addEventListener('submit', validateForm);

function onSignIn(response) {
    console.log(response); // Handle the response from Google Sign-In
}


// Scripts for payments
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    const fields = ['fullName', 'email', 'address', 'city', 'province', 'postalCode', 'cardHolder', 'cardNumber', 'expMonth', 'expYear', 'cvv'];

    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorElement = document.getElementById(field + 'Error');
        input.classList.remove('error');
        errorElement.textContent = '';

        if (!input.value.trim()) {
            input.classList.add('error');
            errorElement.textContent = 'This field is required.';
            isValid = false;
        }
    });

    const cardNumberInput = document.getElementById('cardNumber');
    const cardNumberError = document.getElementById('cardNumberError');
    const cardNumber = cardNumberInput.value.trim().replace(/-/g, '');
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        cardNumberInput.classList.add('error');
        cardNumberError.textContent = 'Card number must be 16 digits.';
        isValid = false;
    }

    const cvvInput = document.getElementById('cvv');
    const cvvError = document.getElementById('cvvError');
    const cvv = cvvInput.value.trim();
    if (cvv.length !== 3 || isNaN(cvv)) {
        cvvInput.classList.add('error');
        cvvError.textContent = 'CVV must be 3 digits.';
        isValid = false;
    }

    if (isValid) {
        // Submit the form or do whatever is needed
        alert('Form is valid');
    } else {
        alert('Please fill out all fields correctly.');
    }
});
