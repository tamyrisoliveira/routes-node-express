const express = require('express')
const router = express.Router()
const data =  require('../data.js')

router.get('/', (req, res) => {
    res.status(200).json({ data})
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const person = data.find( user => user.id == id)

    if (!person) {
        return res.status(204).json({msg: 'Nenhum resultado.'})
    } else {
        return res.json(person)
    }
})

router.post('/', (req, res) => {
    let { name } = req.body
    if (name) {
        return  res.status(201).json(`Olá, ${name}`)
    }
   return res.status(401).json({ msg: "Digite um nome válido."})
})

router.put('/:id', (req, res) => {
    const { id } = req.params 
    const person = data.find( user => user.id == id)

    if (!person) {
        return res.status(404).json({ msg: 'Sem resultado para essa busca.'})
    } 

    const { name } = req.body
    person.name = name // { name } = req.body

        return res.status(200).json(person)

})

router.delete('/:id', (req, res) => {
    const person = data.find( user => user.id == req.params.id)

    if (!person) {
        return res.status(404).json({ msg: 'Sem resultado para essa busca.'})
    } 

    // Se o teste do método 'filter' retornar 'false' o elemento é removido do array.
    const newData = data.filter( (element) => element.id != req.params.id)
    return res.status(200).json(newData)
})

module.exports = router;