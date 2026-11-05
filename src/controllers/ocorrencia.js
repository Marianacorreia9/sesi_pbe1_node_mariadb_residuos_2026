const connection = require('../db')

const listar = (req, res) => {
    connection.query('SELECT * FROM ocorrencia', (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }
        res.json(resultado)
    })
}

const buscar = (req, res) => {
    const { id } = req.params

    connection.query(
        'SELECT * FROM ocorrencia WHERE id = ?',
        [id],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado)
        }
    )
}

const cadastrar = (req, res) => {
    const { usuarioId, local, tipoResiduo, nivelRisco, status } = req.body

    connection.query(
        'INSERT INTO ocorrencia (usuarioId, local, tipoResiduo, nivelRisco, status) VALUES (?, ?, ?, ?, ?)',
        [usuarioId, local, tipoResiduo, nivelRisco, status],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.status(201).json(resultado)
        }
    )
}

const alterar = (req, res) => {
    const { id } = req.params
    const { usuarioId, local, tipoResiduo, nivelRisco, status } = req.body

    connection.query(
        'UPDATE ocorrencia SET usuarioId = ?, local = ?, tipoResiduo = ?, nivelRisco = ?, status = ? WHERE id = ?',
        [usuarioId, local, tipoResiduo, nivelRisco, status, id],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado)
        }
    )
}

const excluir = (req, res) => {
    const { id } = req.params

    connection.query(
        'DELETE FROM ocorrencia WHERE id = ?',
        [id],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado)
        }
    )
}

const resumo = (req, res) => {
    connection.query(
        "SELECT COUNT(*) AS totalTratados FROM ocorrencia WHERE status = 'Tratado'",
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro)
            }
            res.json(resultado[0])
        }
    )
}

module.exports = {
    listar,
    buscar,
    cadastrar,
    alterar,
    excluir,
    resumo
}