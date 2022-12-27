window.addEventListener('load', () =>{
    let display = document.querySelector('.content_pantalla');
    const botones =  document.getElementsByClassName('boton');
    var a;
    var b;
    var operacion;

    //Convertimos el HTMLCollectio a un array
    const botonesArray = Array.from(botones);
    //Iteramos sobre ese arreglo
    botonesArray.forEach((botones) =>{
        botones.addEventListener('click', function(){
            calculadora(botones, display)
        })
    })

    function calculadora(botones, display){
        if(botones.outerText == 'C'){
            borrar(display);
        }else if(botones.outerText == '+'){
            a = display.outerText;
            operacion = '+';
            borrar(display)
        }else if(botones.outerText == '/'){
            a = display.outerText;
            operacion = '/';
            borrar(display);
        }else if(botones.outerText == '-'){
            a = display.outerText;
            operacion = '-';
            borrar(display);
        }else if(botones.outerText == '*'){
            a = display.outerText;
            operacion = '*';
            borrar(display);
        }else if(botones.outerText == '%'){
            a = display.outerText;
            operacion = '%';
            mostrarValores(botones, display);
            calcular();
        }
        else if(botones.outerText == '='){
            b = display.outerText;
            calcular();
        }else{
            mostrarValores(botones, display);
        }
    }
    
    function mostrarValores(botones, display){
        display.innerHTML = botones.innerHTML + display.innerHTML;
        console.log(display)
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
                res = parseFloat(a) % parseFloat(a);
                break;
        }
    }

    //Función para borrar
    function borrar(display){
        display.innerHTML = "";
    };
    
})

