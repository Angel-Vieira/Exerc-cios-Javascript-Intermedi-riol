
function mostraOuEscondeSetas() {
    if (paginaAtual !== 0){
        document.querySelector('.seta-esquerda').classList.remove('opacity') 
    }else{
        document.querySelector('.seta-esquerda').classList.add('opacity')     
    }

  
    if(paginaAtual === cards.length-1){
      document.querySelector('.seta-direita').classList.add('opacity')    
    }else{
      document.querySelector('.seta-direita').classList.remove('opacity')     
    }
}





let cards = document.querySelectorAll('.card')
console.log(cards)

let paginaAtual = 0

function escondePagina(){
    const selecionado = document.querySelector('.selecionado')
    selecionado.classList.remove('selecionado')
}

function mostraPagina(indice){
    cards[indice].classList.add('selecionado');   
}

document.querySelector(".seta-direita").addEventListener("click", ()=>{
    if(paginaAtual === cards.length -1){
        return
    }
    escondePagina()
    paginaAtual++
    mostraPagina(paginaAtual)
    mostraOuEscondeSetas()
})


document.querySelector(".seta-esquerda").addEventListener("click", ()=>{
    if(paginaAtual === 0){
    return
    }
    escondePagina()
    paginaAtual--
    mostraPagina(paginaAtual)
    mostraOuEscondeSetas()
})




    
