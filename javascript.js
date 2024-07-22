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

//script for payments
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('paymentForm').addEventListener('submit-payment', function(event) {
        event.preventDefault();

        let isValid = true;
        const fields = ['fullName', 'email', 'address', 'city', 'province', 'postalCode', 'cardHolder', 'cardNumber', 'expMonth', 'expYear', 'cvv'];

        fields.forEach(field => {
            const input = document.getElementById(field);
            const errorElement = document.getElementById(field + 'Error');
            input.classList.remove('error');
            errorElement.textContent = '';

            console.log(`Checking field: ${field}, Value: ${input.value.trim()}`);

            if (!input.value.trim()) {
                input.classList.add('error');
                errorElement.textContent = 'This field is required.';
                isValid = false;
                console.log(`Field ${field} is empty.`);
            }
        });

        const cardNumberInput = document.getElementById('cardNumber');
        const cardNumberError = document.getElementById('cardNumberError');
        const cardNumber = cardNumberInput.value.trim().replace(/-/g, '');
        console.log(`Card Number: ${cardNumber}`);
        
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            cardNumberInput.classList.add('error');
            cardNumberError.textContent = 'Card number must be 16 digits.';
            isValid = false;
            console.log(`Invalid Card Number: ${cardNumber}`);
        }

        const cvvInput = document.getElementById('cvv');
        const cvvError = document.getElementById('cvvError');
        const cvv = cvvInput.value.trim();
        console.log(`CVV: ${cvv}`);
        
        if (cvv.length !== 3 || isNaN(cvv)) {
            cvvInput.classList.add('error');
            cvvError.textContent = 'CVV must be 3 digits.';
            isValid = false;
            console.log(`Invalid CVV: ${cvv}`);
        }

        if (isValid) {
            alert('Purchase complete!');
            console.log('Form submission is valid.');
            // Add further actions here (e.g., redirect, save data)
        } else {
            alert('Please fill out all fields correctly.');
            console.log('Form submission is invalid.');
        }
    });
});


//Objects
class Event {
    constructor(eventId, title, description, startDate, endDate, location, price, availableTickets) {
        this.eventId = eventId;
        this.title = title;
        this.description = description;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.location = location;
        this.price = price;
        this.availableTickets = availableTickets;
    }

    isSoldOut() {
        return this.availableTickets <= 0;
    }

    updateTicketAvailability(ticketsSold) {
        if (ticketsSold > this.availableTickets) {
            throw new Error('Not enough tickets available');
        }
        this.availableTickets -= ticketsSold;
    }
}

class Ticket {
    constructor(ticketId, eventId, userId, purchaseDate, price) {
        this.ticketId = ticketId;
        this.eventId = eventId;
        this.userId = userId;
        this.purchaseDate = new Date(purchaseDate);
        this.price = price;
    }
}

// Define the User class
class User {
    constructor(userId, username, password, email, fullName) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
    }

    getUsername() {
        return this.username;
    }

    validatePassword(passwordToCheck) {
        return this.password === passwordToCheck;
    }
}

// Create users
const users = [
    new User(1, 'Nozzie_Dev', 'nozzie09', 'nozzie@tix.com', 'Noziphezinhle Nzimande'),
    new User(2, 'kagi', 'kagi003', 'kagi@tix.com', 'Kagiso Masemola'),
    new User(3, 'lerato', 'lera07', 'lerato@tix.com', 'Lerato Nxumalo'),
    new User(4, 'admin', 'admin', 'admin@tix.com', 'Admin User')
];

// Function to find user by username and password
function authenticateUser(username, password) {
    return users.find(user => user.getUsername() === username && user.validatePassword(password));
}




