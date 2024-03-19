const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    
    #frequencia = 0.0

    constructor(codigo, nota, frequencia) {
        super(codigo, nota)
        this.#frequencia = frequencia;
    }
    aprovado() {
        if(this.nota >= 6.0 && frequencia >= 0.75) {
            return true
        } else {
            return false
        }
    }

    get frequencia () {
        return this.#frequencia
    }

    set frequencia (frequencia) {
        this.#frequencia = frequencia
    }
}

module.exports = TurmaPresencial;