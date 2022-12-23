window.addEventListener('load', () =>{
    const display = document.querySelector('.content_pantalla');
    const botones =  document.getElementsByClassName('boton');
    let a = 0;
    let b = 0;
    let operando = '';
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

//Función para realizar las operaciones
function calcular(botones, display){
    if(botones.outerText = '+'){
        display.innerHTML = 'Hola';
        
    }else if(botones.outerText = '-'){
        display.innerHTML = botones.outerText - display.outerText;

    }
}

function borrar(display){
    display.innerHTML = '0';
};
