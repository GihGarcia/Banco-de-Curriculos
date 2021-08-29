'user strict';
var dbConn = require('../../config/db.config');

var Usuario = function(usuario){
    this.nome     = usuario.nome;
    this.cargo      = usuario.cargo;
    this.email          = usuario.email;
    this.dataNascimento = usuario.dataNascimento;
    this.sexo   = usuario.sexo;
    this.estadoCivil    = usuario.estadoCivil;
    this.cep         = usuario.cep;
    this.endereco         = usuario.endereco;
    this.bairro         = usuario.bairro;
    this.cidade         = usuario.cidade;
    this.celular         = usuario.celular;
    this.cpf         = usuario.cpf;
    this.rg         = usuario.rg;
    this.dataCriacao     = new Date();
};
Usuario.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO usuarios set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Usuario.findById = function (id, result) {
    dbConn.query("Select * from usuarios where cpf = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

module.exports= Usuario;