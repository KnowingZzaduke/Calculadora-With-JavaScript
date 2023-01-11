window.addEventListener('load', () =>{
    const display = document.querySelector('.content_pantalla');
    const botones =  document.getElementsByClassName('boton');
    let a;
    let b;
    let operacion;

    //Convertimos el HTMLCollectio a un array
    const botonesArray = Array.from(botones);
    //Iteramos sobre ese arreglo
    botonesArray.forEach((botones) =>{
        botones.addEventListener('click', function(){
            calculadora(botones, display)
        })
    })

    //Función encargada de calcular
    function calculadora(botones, display){
        switch(botones.outerText){
            case "C":
                borrar(display);
                break;
            
            case "+":
                a = display.textContent
                operacion = "+";
                borrar(display);
                break;
            
            case "-":
                a = display.textContent
                operacion = "-";
                borrar(display);
                break;

            case "/":
                a = display.textContent
                operacion = "/";
                borrar(display);
                break;

            case "*":
                a = display.textContent
                operacion = "*";
                borrar(display);
                break;

            case "%":
                a = display.textContent;
                operacion = "%";
                borrar(display);
                break;

            case "=":
                b = display.textContent
                calcular();
    
            default:
                mostrarValores(botones, display);
        }
    }
    
    function mostrarValores(botones, display){
        if(botones.outerText == "="){
            delete(botones.outerText);
        }else{
            display.innerHTML =  display.outerText + botones.outerText;
        }
    };
    
    //Función para realizar las operaciones
    function calcular(){
        var res;
        switch(operacion){
            case "+":
                res = parseFloat(a) + parseFloat(b);
                display.innerHTML = res;
                break;
    
            case "*":
                res = parseFloat(a) * parseFloat(b);
                display.innerHTML = res;
                break;
            
            case "/":
                res = parseFloat(a) / parseFloat(b);
                display.innerHTML = res;
                break;
    
            case "-":
                res = parseFloat(a) - parseFloat(b);
                display.innerHTML = res;
            break;

            case "%":
                res = parseFloat(a) % parseFloat(b);
                display.innerHTML = res;
                break;
            
            default:
                display.innerHTML = "Syntax Error";
        }
    }

    //Función para borrar
    function borrar(display){
        display.innerHTML = "";
    };
})


