function validate() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  const userError = document.getElementById("userError");
  const passwordError = document.getElementById("passwordError");
  if (username.value.trim() === "") {
    userError.style.display = "block";
    username.style.border = "2px solid red";
    return false;
  } else if (password.value.trim() === "") {
    passwordError.style.display = "block";
    password.style.border = "2px solid red";
    return false;
  } else if (password.value.trim().length < 8) {
    alert("The minimum number of passwords must be 8 numbers");
    return false;
  } else {
    return true;
  }
}
