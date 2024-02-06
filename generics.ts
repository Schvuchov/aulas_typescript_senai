interface PointNumber {
    x:number,
    y:number,
}

interface PointString{
    x: string,
    y: string,
}

interface PointGeneric<Type> {
    x:Type,
    y:Type,
    z:number
}

let referenciaNumber: PointNumber  = {
    x:10,
    y:20,
}

let referenciaString: PointString = {
    x: "10",
    y: "20",
}

let referencia: PointGeneric<number> = {
    x:10,
    y:"20",
}