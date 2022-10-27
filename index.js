import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01');
console.log(novoUser.exibirInfos());

const newAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(newAdmin.nome);
newAdmin.nome = 'André';
console.log(newAdmin.nome);

