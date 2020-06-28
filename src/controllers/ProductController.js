const mongoose = require('mongoose')



const Product = mongoose.model('Product')
mongoose.set('useFindAndModify', false);

// exportar objeto com algumas funções
module.exports = {
    //Crud
    //Create, Read, Update and Delete

    //listagem
    async index(req, res){
        // valor da paginação, valor default = 1
        const { page = 1 } = req.query                //short sintaxe page: page
        const products  = await Product.paginate({}, { page, limit: 10})

        return res.json(products)
    },

    // detalhe, mostrar o dado de um unico produto
    async show(req, res){
        // pegando pelo id do produto
        const product = await Product.findById(req.params.id)
        
        return res.json(product)
    },


    // criação
    async store(req, res) {
        // req: todos os dados da requisição
        // então eu estou pegando o corpo da nossa req
        const product = await Product.create(req.body)

        return res.json(product)
    },

    //upadate 
    async update(req, res){
        // estou mostrando o produto e atualizando os produto que vem lá do body
        // new: true => retornar o produto atualizado, sem o'new' ele vai voltar com o valor antigo  
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        return res.json(product)
    },
    
    // delete
    async delete(req, res){
        await Product.findByIdAndRemove(req.params.id)
        
        return res.send()
    }
    
}