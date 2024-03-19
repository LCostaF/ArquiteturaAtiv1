class Aluno {

    nome = ''
    login = ''
    RA = 0

    constructor (nome, login, RA) {
        this.nome = nome;
        this.login = login;
        this.RA = RA;
    }

    get nome () {
        return this.nome
    }

    get login () {
        return this.login
    }

    get RA () {
        return this.RA
    }

    set nome (nome) {
        this.nome = nome
    }

    set login (login) {
        this.login = login
    }

    set RA (RA) {
        this.RA = RA
    }
}

module.exports = Aluno;