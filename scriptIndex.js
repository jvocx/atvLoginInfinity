let email = document.getElementById("emailLogin");
let password = document.getElementById("passwordLogin");

let action = document.getElementById("action");


action.addEventListener("click", function(e) {
    e.preventDefault();

    const emailCadastro = localStorage.getItem('userEmail');
    const passwordCadastro = localStorage.getItem('userPassword');

    if(email.value === emailCadastro && password.value === passwordCadastro){
        alert("✅ Acesso autorizado!");
        // redirecionamento opcional
        // window.location.href = "home.html";
    } else {
        alert("❌ Verifique o login e a senha!");
    }
});