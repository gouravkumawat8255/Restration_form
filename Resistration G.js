 document.getElementById('registerForm').addEventListener('submit', function(e) {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    if (username === "" || email === "" || password === "" || confirm_password === "") {
        e.preventDefault();
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirm_password) {
        e.preventDefault();
        alert('Passwords do not match.');
    }
}); 

