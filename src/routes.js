const express = require("express")
const router = express.Router()

const usuario = require("./controllers/usuario")
const ocorrencia = require("./controllers/ocorrencia")

router.get('/', (req, res) => {
    res.json("Back-end respondendo")
})

router.get('/usuarios', usuario.listar)
router.get('/usuarios/:id', usuario.buscar)
router.post('/usuarios', usuario.cadastrar)
router.put('/usuarios/:id', usuario.alterar)
router.delete('/usuarios/:id', usuario.excluir)

router.post('/login', usuario.login)

router.get('/ocorrencias', ocorrencia.listar)
router.get('/ocorrencias/:id', ocorrencia.buscar)
router.post('/ocorrencias', ocorrencia.cadastrar)
router.put('/ocorrencias/:id', ocorrencia.alterar)
router.delete('/ocorrencias/:id', ocorrencia.excluir)

router.get('/ocorrencias/resumo/tratados', ocorrencia.resumo)

module.exports = router