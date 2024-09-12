import { animesModel } from '../models/animes.js'
import { validatedAnimes, validatedPartialAnimes } from '../schemas/animes.js'

export class animesController {
  static async getAll(req, res) {
    const { genre } = req.query
    const animes = await animesModel.getAll({ genre })
    res.json(animes)
  }

  static async getById(req, res) {
    const { id } = req.params
    const animes = await animesModel.getById({ id })
    if (animes) return res.json(animes)
    res.status(404).json({ message: 'animes not found' })
  }

  static async create(req, res) {
    const result = validatedAnimes(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newanimes = await animesModel.create({ input: result.data })

    res.status(201).json(newanimes)
  }

  static async delete(req, res) {
    const { id } = req.params

    const result = await animesModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'animes not found' })
    }

    return res.json({ message: 'animes deleted' })
  }

  static async update(req, res) {
    const result = validatedPartialAnimes(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedanimes = await animesModel.update({ id, input: result.data })

    return res.json(updatedanimes)
  }
}
