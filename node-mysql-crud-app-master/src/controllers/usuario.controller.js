'use strict';

const Usuario = require('../models/usuario.model');

exports.create = function(req, res) {
    const usuario = new Usuario(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Usuario.create(usuario, function(err, usuario) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Usuario added successfully!",data:Usuario});
        });
    }
};


exports.findById = function(req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
        if (err)
        res.send(err);
        res.json(usuario);
    });
};