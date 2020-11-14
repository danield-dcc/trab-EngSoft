let prompt = require('prompt-sync')();



menu:
    while(true != 6){
       
        console.log('Calculadora');
        console.log('Qual operação deseja realizar: ');
        console.log('1.  Soma');
        console.log('2.  Subtração');
        console.log('3.  Multiplicação');
        console.log('4.  Divisão');
        console.log('6.  Sair');

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

    let a = Number(prompt("Primerio Número: ") );
    let b = Number(prompt("Segundo Número: ") );
    let res = a + b;
    console.log(`Resultado: ${res}`);


}

function sub(){  //TODO: Implementar subtração
    let a = Number(prompt("Primerio Número: ") );
    let b = Number(prompt("Segundo Número: ") );
    let res = a - b;
    console.log(`Resultado: ${res}`);

}

function mult(){  //TODO: Implementar Multiplicação
    let a = Number(prompt("Primerio Número: ") );
    let b = Number(prompt("Segundo Número: ") );
    let res = a * b;
    console.log(`Resultado: ${res}`);

}

function div(){
    let a = Number(prompt("Primerio Número: ") );
    let b = Number(prompt("Segundo Número: ") );
    let res = a /= b;
    console.log(`Resultado: ${res}`);
}
