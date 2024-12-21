function validateSignup() {
    let isValid = true;
    
    // Clear previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
  
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate Username (non-empty)
    if (username.trim() === "") {
      document.getElementById("usernameError").innerText = "Username is required.";
      isValid = false;
    }
  
    // Validate Email (non-empty and correct format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
      document.getElementById("emailError").innerText = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Validate Password (non-empty and minimum length)
    if (password.trim() === "") {
      document.getElementById("passwordError").innerText = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
      isValid = false;
    }
  
    // Validate Confirm Password (must match password)
    if (confirmPassword.trim() === "") {
      document.getElementById("confirmPasswordError").innerText = "Confirm password is required.";
      isValid = false;
    } else if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
      isValid = false;
    }
  
    // Return whether the form is valid or not
    return isValid;
  }
  