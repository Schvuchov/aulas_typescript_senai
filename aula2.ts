let mensagem: string = "Hello World";

function helloWorld(nome: string | number){
    console.log("Ola", nome )
}

//function calcular(valor1, valor2, operacao){}

//calcular(10,20) // da erro em ts pois falta um parametro.

function calcular(valor1: number, valor2: number, operacao? : string) : number {
    operacao = (operacao === 'undefined' ? 'soma' : operacao) //isso faz com que aceite não ser passado o param. outra maneira é a ? ao lado do param na linha acima
    if(operacao ==='soma'){
        return valor1 + valor2;
    }
     return valor1 * valor2;
}

let resultado = calcular(10,20)