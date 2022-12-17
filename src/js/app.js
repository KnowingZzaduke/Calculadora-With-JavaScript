window.addEventListener('load', ()=>{
    const display = document.querySelector('.content_pantalla');
    const botones = document.getElementsByClassName('boton');

    //Variable para convertir nuestro HTMLcollection a un array
    const botonesArray = Array.from(botones);

    //Iteramos sobre los botones
    botonesArray.forEach((button)=>{
        button.addEventListener('click', ()=>{
            calculadora(button,display)
        });
    });
});

//Función calculadora
function calculadora(button, display){
    if(button.innerHTML == 'C'){
        borrar(display);
    }else if(button.innerHTML == '='){
        calcular(display);
    }else{
        actualizar(display, button);
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML == '';
    }
    display.innerHTML = display.innerHTML + button.innerHTML;
}

function borrar(display){
    display.innerHTML == '0';
}
