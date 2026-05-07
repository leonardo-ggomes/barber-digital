const Usuario = require("../mvc/models/UsuarioModel");
const UsuarioSchema = require("../schemas/UsuarioSchema");

class UsuarioService 
{

    #usuarioSchema
    
    constructor() 
    {     
        this.#usuarioSchema = UsuarioSchema;
    }

    async buscarUsuario(id) 
    {   
        return await this.#usuarioSchema.findAll({
            where: { id: id }
        });
    }

    async cadastrarUsuario(username, email, senha)
    {
        const usuario = new Usuario(email, senha, username)
        
        const id = await this.#usuarioSchema.create(
            {
                username: usuario.nome,
                email: usuario.email,
                password: usuario.senha
            }
        )

        return id;

    }


}
// Corrigido de modules para module
module.exports = UsuarioService;