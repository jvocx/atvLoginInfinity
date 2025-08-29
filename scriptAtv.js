let email = document.getElementById("emailLogin");
let emailCadastro = document.getElementById("email");
let password = document.getElementById("passwordLogin");
let passwordCadastro = document.getElementById("passwordCadastro");
let action = document.getElementById("action");



action.addEventListener("click", function submitLogin (e) {
    e.preventDefault()
  if (email.value === emailCadastro && password.value === "123456") {
    alert("acesso autorizado!")
} else {
    alert("Verifique o login e a senha e tente novamente!")
}  
})