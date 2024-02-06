class PrintNome<T> {
    _printable: T;

    constructor(printable: T) {
        this._printable = printable;
    }

    print() {
        console.log(this._printable);
    }

    get printable(): T {
        return this._printable
    }
}

let printable: PrintNome<string> = new PrintNome("bla")

let printableNumero: PrintNome<number> = new PrintNome(10)

const alunoNovo : Aluno = {nome: "leo", idade: 35};

let printableAluno: PrintNome<Aluno> = new PrintNome(alunoNovo)