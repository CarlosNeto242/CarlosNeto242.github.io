document.addEventListener('DOMContentLoaded', function(){
    elemento_botao = document.querySelector('.index-button')
    elemento_botao.addEventListener('click', function(event){
        t = event.currentTarget
        elemento_nome = t.querySelector("input[type='submit']")
        valor = inputElement.value
        console.log('value')
        localStorage.setItem('nome', valor)
    })
    
})