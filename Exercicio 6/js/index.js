let setaClique = document.querySelectorAll(".pergunta")
let conteudos = document.querySelectorAll(".contend")
let seta = document.querySelectorAll('.texto-e-seta')

setaClique.forEach(function(item, index){
  item.addEventListener("click", function ()  {

  let estaOculto = conteudos[index].classList.contains('none')
  
  if(estaOculto){
    conteudos[index].classList.remove('none')
    conteudos[index].classList.add('conteudo-mostrado')
    seta[index].classList.add('ativo')
    return
  }

    conteudos[index].classList.add('none')
    seta[index].classList.remove('ativo')
   
  })
})


  










