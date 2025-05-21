// Toggle between Login and Register forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

if (showRegister)
  showRegister.onclick = function (e) {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  };
if (showLogin)
  showLogin.onclick = function (e) {
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
  };

// Password visibility toggle
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
if (togglePassword && passwordInput) {
  togglePassword.onclick = function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.classList.add("active");
    } else {
      passwordInput.type = "password";
      togglePassword.classList.remove("active");
    }
  };
}
const toggleRegPassword = document.getElementById("toggleRegPassword");
const regPasswordInput = document.getElementById("regPassword");
if (toggleRegPassword && regPasswordInput) {
  toggleRegPassword.onclick = function () {
    if (regPasswordInput.type === "password") {
      regPasswordInput.type = "text";
      toggleRegPassword.classList.add("active");
    } else {
      regPasswordInput.type = "password";
      toggleRegPassword.classList.remove("active");
    }
  };
}

// Input focus/blur for underline animation (optional: auto-focus underline)
document.querySelectorAll(".input-group input").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentNode.querySelector(".input-underline").style.opacity = 1;
  });
  input.addEventListener("blur", function () {
    this.parentNode.querySelector(".input-underline").style.opacity = 0;
  });
});

// Login logic
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMessage");
  errorMsg.style.color = "#e63946";
  if (username === "admin" && password === "password") {
    errorMsg.style.color = "#27ae60";
    errorMsg.textContent = "Login successful!";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1200);
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});

// Register logic (demo)
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const errorMsg = document.getElementById("registerError");
  errorMsg.style.color = "#e63946";
  if (username && email && password.length >= 6) {
    errorMsg.style.color = "#27ae60";
    errorMsg.textContent = "Registration successful! Now you can login.";
    setTimeout(() => {
      registerForm.style.display = "none";
      loginForm.style.display = "flex";
      errorMsg.textContent = "";
    }, 1200);
  } else {
    errorMsg.textContent = "All fields required, password min 6 chars.";
  }
});

// Forgot password modal (demo)
const forgotPassword = document.getElementById("forgotPassword");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
if (forgotPassword && modal && closeModal) {
  forgotPassword.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  };
  closeModal.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
