

document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.querySelector("form");

  registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Corrigido para pegar o ID correto do e-mail.
    const email = document.getElementById("emailCadastro").value;
    const password = document.getElementById("passwordCadastro").value;
    const termos = document.getElementById("termos").checked;

    if (termos) {
      // Salva o e-mail e a senha no LocalStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html"; // Redireciona para a página de login
    } else {
      alert("Por favor, aceite os termos de uso.");
    }
  });
});