window.addEventListener('load', () =>{
    const resultado = document.querySelector('.content_pantalla');
    const botones = document.getElementsByClassName('boton');

    //Convertimos el HTMLcollection a un array
    const botonesArray = Array.from(botones);

    //Iteramos sobre los botones
    botonesArray.forEach((button)=>{
        button.addEventListener('click', ()=>{
            calculadora(button, resultado);
        })
    })
})

function calculadora(button, resultado){
    if(button.innerHTML == 'C'){
        borrar(resultado);
    }else if(button.innerHTML == '='){
        calcular(resultado);
    }else{
        actualizar(button, resultado);
    }
}

//Función Actualizar
function actualizar(button, resultado){
    if(resultado.innerHTML == '0'){
        resultado.innerHTML = '';
    }
    resultado.innerHTML = button.innerHTML + resultado.innerHTML;
}

function calcular(resultado){
    resultado.innerHTML = eval(resultado.innerHTML);
}

function borrar(button, resultado){
    if(button.innerHTML == '='){

    }
}


