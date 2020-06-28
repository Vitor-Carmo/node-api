const express = require('express') 

const routes = express.Router()


const ProductController = require('./controllers/ProductController')

// chamado o index do product controller
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)
routes.post('/products', ProductController.store)


module.exports = routes