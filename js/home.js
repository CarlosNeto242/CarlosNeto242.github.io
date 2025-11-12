document.addEventListener('DOMContentLoaded', function(){
    nome = localStorage.getItem('nome')
    elemento_header = document.querySelector('.header')
    elemento_header.innerHTML = `Bem vinda, ${nome}!`
})