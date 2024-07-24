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




