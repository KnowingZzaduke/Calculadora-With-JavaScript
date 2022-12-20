window.addEventListener('load', () =>{
    const display = document.querySelector('.content_pantalla');
    const botones =  document.getElementsByClassName('boton');
    const sumar = document.querySelector('.sumar');
    const restar = document.querySelector('.restar');
    const multiplicar = document.querySelector('.multiplicar');
    const dividir = document.querySelector('.dividir');

    //Convertimos el HTMLCollectio a un array
    const botonesArray = Array.from(botones);

    //Iteramos sobre ese arreglo
    botonesArray.forEach((botones) =>{
        botones.addEventListener('click', function(){
            calculadora(botones, display)
        })
    })
})

function calculadora(botones, display){
    if(botones.outerText == 'C'){
        borrar(display);
    }else if(botones.outerText == '='){
        calcular(botones, display);
    }else{
        mostrarValores(botones, display);
    }
}

function mostrarValores(botones, display){
    display.innerHTML = botones.innerHTML + display.innerHTML;
};

function calcular(botones, display){
    
}

function borrar(display){
    display.innerHTML = '0';
};
