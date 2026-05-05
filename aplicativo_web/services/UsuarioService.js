const Usuario = require("../mvc/models/UsuarioModel");
const UsuarioSchema = require("../schemas/UsuarioSchema");

class UsuarioService {

    #usuarioSchema
    
    constructor() {     
        this.#usuarioSchema = UsuarioSchema;
    }
   // No seu UsuarioService.js
    async buscarUsuario(id) {
        return await this.#usuarioSchema.findAll({
            where: { id: id }
        });
    }
}
// Corrigido de modules para module
module.exports = UsuarioService;