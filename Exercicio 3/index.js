document.getElementById('button').addEventListener('click', ()=>{
    let quadrado = document.getElementById('quadrado')
   
    const quadradoAzulExiste = quadrado.classList.contains('azul')
    
    if (quadradoAzulExiste){
        quadrado.classList.remove('azul')
    }else{
        quadrado.classList.add("azul")
        alert("tem a classe azul")
    }
    
    
    
})