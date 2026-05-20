const prisma = require('../data/prisma')

module.exports = {
  async index(req, res) {
    try {
      const estadias = await prisma.estadia.findMany({ include: { veiculo: true } })
      res.json(estadias)
    } catch (err) {
      res.status(500).json({ erro: err.message })
    }
  },

  async create(req, res) {
    try {
      const { veiculoId, valorHora } = req.body
      const estadia = await prisma.estadia.create({
        data: {
          veiculoId: Number(veiculoId),
          valorHora: Number(valorHora)
        }
      })
      res.status(201).json(estadia)
    } catch (err) {
      res.status(500).json({ erro: err.message })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { saida, valorHora } = req.body

      const estadiaAtual = await prisma.estadia.findUnique({ where: { id: Number(id) } })
      if (!estadiaAtual) return res.status(404).json({ erro: 'Estadia não encontrada' })

      let valorTotal = estadiaAtual.valorTotal
      const vH = valorHora ? Number(valorHora) : estadiaAtual.valorHora

      if (saida) {
        const entrada = new Date(estadiaAtual.entrada)
        const saidaDate = new Date(saida)
        const horas = (saidaDate - entrada) / (1000 * 60 * 60) 
        valorTotal = vH * horas
      }

      const estadia = await prisma.estadia.update({
        where: { id: Number(id) },
        data: {
          saida: saida ? new Date(saida) : undefined,
          valorHora: vH,
          valorTotal
        }
      })
      res.json(estadia)
    } catch (err) {
      res.status(500).json({ erro: err.message })
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params
      await prisma.estadia.delete({ where: { id: Number(id) } })
      res.status(204).send()
    } catch (err) {
      res.status(500).json({ erro: err.message })
    }
  }
}