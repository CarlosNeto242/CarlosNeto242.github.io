document.addEventListener('DOMContentLoaded', function(){
    elemento_botao = document.querySelector('.index-button')
    elemento_botao.addEventListener('click', function(event){
        t = event.currentTarget
        elemento_nome = document.querySelector("input[type='text']")
        valor = elemento_nome.value
        localStorage.setItem('nome', valor)
        
    })
    
})