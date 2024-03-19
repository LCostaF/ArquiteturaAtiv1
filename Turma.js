class Turma {

    #codigo = ''
    #nota = 0.0

    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }
    aprovado() {
        if(nota >= 6.0) {
            return true
        } else {
            return false
        }
    }

    get codigo () {
        return this.#codigo
    }

    get nota () {
        return this.#nota
    }

    set codigo (codigo) {
        this.#codigo = codigo
    }

    set nota (nota) {
        this.#nota = nota
    }
}

module.exports = Turma;