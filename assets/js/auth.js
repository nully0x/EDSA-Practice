const registrationForm = document.querySelector("#registration-form form")
const loginForm = document.querySelector("#login-form form")
const welcomeMessage = document.querySelector("#welcome-message")
const usernameSpan = document.querySelector("#username")
const logoutButton = document.querySelector("#logout-button")


registrationForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const username = registrationForm.elements.username.value
    const password = registrationForm.elements.password.value
    localStorage.setItem(username,password);
    registrationForm.reset();
    showLoginForm();
})

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const username = loginForm.elements.username.value
    const password = loginForm.elements.password.value
    const storedPassword = localStorage.getItem(username)
    if (password === storedPassword) {
        showWelcomeMessage(username)
    }else{
        alert("Invalid Username or Password")
    }
    loginForm.reset()
});

logoutButton.addEventListener("click", () =>{
    showRegistrationForm()
})

function showRegistrationForm(){
    registrationForm.style.display="block";
    loginForm.style.display="none";
    welcomeMessage.style.display = "none";
}

function showLoginForm(){
    registrationForm.style.display = "none";
    loginForm.style.display = "block";
    welcomeMessage.style.display = "none";
}

function showWelcomeMessage(username){
    usernameSpan.textContent = username;
    registrationForm.style.display="none";
    loginForm.style.display="none";
    welcomeMessage.style.display = "block";
}


if(localStorage.length === 0) {
    showRegistrationForm();
}else{
    showLoginForm();
}


