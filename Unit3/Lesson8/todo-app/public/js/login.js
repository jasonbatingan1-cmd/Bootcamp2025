document.addEventListener('DOMContentLoaded', function () {
// Add event listener to register form submission

const registerForm = document.getElementById('register-form');
const usernameInput = document.getElementById('register-username');
const passwordInput = document.getElementById('register-password');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("register button clicked");
    const username = usernameInput.value;
    const password = passwordInput.value;

    //Creating a new user registration
    const newUser = {
        username,
        password
    };

    console.log(JSON.stringify(newUser));

    fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(response => {
            console.log('User registered successfully:', response);
            alert('Registration successful! You can now log in.');
            // Optionally, redirect to login page or show success message
            usernameInput.value = '';
            passwordInput.value = '';
        })
        .catch(err => console.error('Error registering user: ', err));
});


// Add event listener to login form submission
const loginForm = document.getElementById('login-form');
const loginUsernameInput = document.getElementById('login-username');
const loginPasswordInput = document.getElementById('login-password');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("login button clicked");
    const username = loginUsernameInput.value;
    const password = loginPasswordInput.value;

    //User login
    const userCredentials = {
        username,
        password,
    };

    console.log(JSON.stringify(userCredentials));

    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })
        .then(res => {
            if (res.redirected) {
                window.location.href = res.url; // Redirect to the URL provided by the server
            } else {
                return res.json();
            }
        })
        .then(response => {
            if (response) {
                console.log('Login response:', response);
                alert('Login failed! Please check your credentials and try again.');
            }
        })
        .catch(err => console.error('Error logging in user: ', err));
});
});