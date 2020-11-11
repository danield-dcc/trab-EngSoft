let prompt = require('prompt-sync')();

menu:
    while(true){
       
        console.log('Calculadora');
        console.log('Qual operação deseja realizar: ');
        console.log('1.  Soma');
        console.log('2.  Subtração');
        console.log('3.  Multiplicação');
        console.log('4.  Divisão');
        console.log('5.  Sair');

        var opcao = Number(prompt('Opção: '));

            switch(opcao){
                case 1:
                    sum();
                    break
                case 2:
                    sub();
                    break
                case 3:
                    mult();
                    break
                case 4:
                    div();
                    break
                default:
                 break menu
            }
    }

function sum(){  //TODO: Implementar soma
    
}

function sub(){
    //TODO: Implementar subtração
}

function mult(){
    //TODO: Implementar multiplicação
}

function div(){
    //TODO: Implementar divisão
}
