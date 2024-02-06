interface Point {
    x:number,
    y:number,
}

// : void é utilizado quando não temos um retorno 
function logPoint(p: Point) : void {
    console.log(`a variavel p é dp tipo ${typeof p}`)
    console.log(`${p.x}.${p.y}`);
}

const bla = { x:10, y:20}; //estou passando um object nessa const e ele reconhece que é valido como Point pois por mais q não seja, obedece a interface Point
logPoint(bla) // tanto que é aceito pela função