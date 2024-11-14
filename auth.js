
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple example check
    if (username === "admin" && password === "1234") {
        // Redirect to the dashboard or main page
        window.location.href = "sc.html";  // Replace with your file path
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
        document.getElementById('errorMessage').style.display = 'block';
    }
});
