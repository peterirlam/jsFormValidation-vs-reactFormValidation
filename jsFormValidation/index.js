const  validate = () => {
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  checkUsername(username)
  checkEmail(email)
  checkPassword(password)
  checkPasswordsMatch(password, cpassword)
}

const checkUsername = username => {
  if(username.length > 7) {
    document.querySelector("#username").classList.add("success");
    document.querySelector("#username").classList.replace("error", "success");
    document.querySelector("#username-error").innerText = "";
  } else {
    document.querySelector("#username").classList.add("error");
    document.querySelector("#username-error").innerText = "Username must be at least 8 characters long";
  }
}

const checkEmail = email => {
  if(email.length > 8 && email.includes("@")) {
    document.querySelector("#email").classList.add("success");
    document.querySelector("#email").classList.replace("error", "success");
    document.querySelector("#email-error").innerText = "";
  } else {
    document.querySelector("#email").classList.add("error");
    document.querySelector("#email-error").innerText = "Please enter a valid email";
  }
}

 const checkPassword = password => {
   let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if(reg.test(password)) {
    document.querySelector("#password").classList.add("success");
    document.querySelector("#password").classList.replace("error", "success");
    document.querySelector("#password-error").innerText = "";
  } else {
    document.querySelector("#password").classList.add("error");
    document.querySelector("#password-error").innerText = "Minimum 8 characters, at least 1 letter, 1 number and 1 special character";
  }
} 

const checkPasswordsMatch = (password, cpassword) => {
  if(password === cpassword && password != '') {
    document.querySelector("#cpassword").classList.add("success");
    document.querySelector("#cpassword").classList.replace("error", "success");
    document.querySelector("#cpassword-error").innerText = "";
  } else {
    document.querySelector("#cpassword").classList.add("error");
    document.querySelector("#cpassword-error").innerText = "Your passwords do not match";
  }
}


