const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ahmad2017" && password === "integrity") {
       
        window.location.href = "https://kreasi.nurulfikri.ac.id/muha21247ti/succes/berhasil.html";
       
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
   
})