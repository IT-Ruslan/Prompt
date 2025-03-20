document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Dummy validation - replace with your own logic
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
