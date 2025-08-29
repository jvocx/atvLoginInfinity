let email = document.getElementById("email");
let password = document.getElementById("password");
let action = document.getElementById("action");


action.addEventListener("click", function submitLogin (e) {
    e.preventDefault()
  if (email.value === " " && password.value === "123456") {
    alert("acesso autorizado!")
} else {
    alert("Verifique o login e a senha e tente novamente!")
}  
})