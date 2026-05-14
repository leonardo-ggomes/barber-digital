const Atendimento = require("../mvc/models/AtendimentoModel");
const AtendimentoSchema = require("../schemas/AtendimentoSchema");

class AtendimentoService 
{

    #atendimentoSchema
    
    constructor() 
    {     
        this.#atendimentoSchema = AtendimentoSchema;
    }

    async buscarAtendimento(id) 
    {   
       const dado = await this.#atendimentoSchema.findOne({
            where: { id: id }
        });

        if(!dado){
            return null
        }

       const atendimento = new Atendimento(
        dado.nomeCliente,
        dado.telefone,
        dado.horarioAtendimento,
        dados.dataAtendimento,
        dado.dataNascimento,
        dado.tipoServico,
        dado.profissional
       )

       atendimento.id = dado.id

       return atendimento;

    }

    async deletarAtendimento(id) 
    {   
        const atendimento = await this.#atendimentoSchema.findOne({
            where: { id: id }
        });

        const affectedRows = await atendimento.destroy()

        return affectedRows;
    }

    async buscarTodosAtendimentos() 
    {   
        const atendimentos = []
        const dados = await this.#atendimentoSchema.findAll();

        for(const atendimento of dados)
        {

            const a = new Atendimento(
                    atendimento.nomeCliente,
                    atendimento.telefone,
                    atendimento.horarioAtendimento,
                    atendimento.dataAtendimento,
                    atendimento.dataNascimento,
                    atendimento.tipoServico,
                    atendimento.profissional
                )
            
            a.id = atendimento.id

            atendimentos.push(a)
        }

        return atendimentos

    }

    async cadastrarAtendimento(
       nomeCliente,
       telefone,
       horarioAtendimento,
       dataAtendimento,
       dataNascimento,
       tipoServico,
       profissional
    )
    {
        const atendimento = new Atendimento(
           nomeCliente,
           telefone,
           horarioAtendimento,
           dataAtendimento,
           dataNascimento,
           tipoServico,
           profissional
        )
        
        const a = await this.#atendimentoSchema.create(
            {
                nomeCliente: atendimento.nomeCliente,
                telefone: atendimento.telefone,
                horarioAtendimento: atendimento.horarioAtendimento,
                dataAtendimento: atendimento.dataAtendimento,
                dataNascimento: atendimento.dataNascimento,
                tipoServico: atendimento.tipoServico,
                profissional: atendimento.profissional
            }
        )

        return a;

    }

    async atualizarAtendimento(
        id, 
        nomeCliente,
        telefone,
        horarioAtendimento,
        dataAtendimento,
        dataNascimento,
        tipoServico,
        profissional
    )
    {
       
        let rows = 0;

        const atendimento = await this.buscarAtendimento(id)

        if(atendimento)
        {
           
            const model = new Atendimento(
                nomeCliente || atendimento.nomeCliente , 
                telefone || atendimento.telefone,
                horarioAtendimento || atendimento.horarioAtendimento,
                dataAtendimento || atendimento.dataAtendimento,
                dataNascimento || atendimento.dataNascimento,
                tipoServico || atendimento.tipoServico,
                profissional ||  atendimento.profissional        
            )

             const affectedRows = await this.#atendimentoSchema.update(
                {
                    nomeCliente: model.nomeCliente,
                    telefone: model.telefone,
                    horarioAtendimento: model.horarioAtendimento,
                    dataAtendimento: model.dataAtendimento,
                    dataNascimento: model.dataNascimento,
                    tipoServico: model.tipoServico,
                    profissional: model.profissional
                },
                {
                    where: {
                        id: id
                    }
                }
            )

            rows = affectedRows
        }       

        return rows;
    }


}
// Corrigido de modules para module
module.exports = AtendimentoService;