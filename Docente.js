import User from './User.js';

export default class Docent extends User {

    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}`;

    }
}


const novoDocente = new Docente ('Henrique', 'h@m.com', '2000-11-20');

