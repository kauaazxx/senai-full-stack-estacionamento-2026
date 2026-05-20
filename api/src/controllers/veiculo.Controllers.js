const prisma = require('../data/prisma')

module.exports = {
  async index(req, res) {
    try {
      const veiculos = await prisma.veiculo.findMany({ include: { estadias: true } })
      res.json(veiculos)
    } catch (err) {
      res.status(500).json({ erro: err.message })
    }
  },

  async show(req, res) {
    try {
      const { placa } = req.params
      const veiculo = await prisma.veiculo.findUnique({
        where: { placa },
        include: { estadias: true }
      })
      if (!veiculo) return res.status(404).json({ erro: 'Veículo não encontrado' })
      res.json(veiculo)
    } catch (err) {
      res.status(500).json({ erro: err.message })
    }
  },

  async create(req, res) {
    try {
      const { placa, modelo, cor, ano } = req.body
        const veiculo = await prisma.veiculo.create({
          data: { placa, modelo, cor: cor || null, ano: ano ? Number(ano) : null }
      })
        res.status(201).json(veiculo)
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
  },

  async update(req, res) {
    try {
        const { id } = req.params
        const { placa, modelo, cor, ano } = req.body
        const veiculo = await prisma.veiculo.update({
          where: { id: Number(id) },
          data: { placa, modelo, cor: cor || null, ano: ano ? Number(ano) : null }
      })
      res.json(veiculo)
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
  },

  async destroy(req, res) {
    try {
        const { id } = req.params
        await prisma.veiculo.delete({ where: { id: Number(id) } })
        res.status(204).send()
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
  }
}