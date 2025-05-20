// Example JS for validating the login form and showing an error message

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate authentication (replace with your own logic/backend call)
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // For demo: Accept "admin" as username and "password" as password
  if (username === "admin" && password === "password") {
    document.getElementById("errorMessage").style.color = "#27ae60";
    document.getElementById("errorMessage").textContent = "Login successful!";
    // Redirect or further action here
    setTimeout(() => {
      window.location.href = "dashboard.html"; // example
    }, 1200);
  } else {
    document.getElementById("errorMessage").style.color = "#d63031";
    document.getElementById("errorMessage").textContent =
      "Invalid username or password.";
  }
});
