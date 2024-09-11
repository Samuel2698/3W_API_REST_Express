import { seinenModel } from '../models/seinen.js'
import { validatedseinen, validatedPartialseinen } from '../schemas/seinen.js'

export class seinenController {
  static async getAll(req, res) {
    const { genre } = req.query
    const seinen = await seinenModel.getAll({ genre })
    res.json(seinen)
  }

  static async getById(req, res) {
    const { id } = req.params
    const seinen = await seinenModel.getById({ id })
    if (seinen) return res.json(seinen)
    res.status(404).json({ message: 'seinen not found' })
  }

  static async create(req, res) {
    const result = validatedseinen(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newseinen = await seinenModel.create({ input: result.data })

    res.status(201).json(newseinen)
  }

  static async delete(req, res) {
    const { id } = req.params

    const result = await seinenModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'seinen not found' })
    }

    return res.json({ message: 'seinen deleted' })
  }

  static async update(req, res) {
    const result = validatedPartialseinen(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedseinen = await seinenModel.update({ id, input: result.data })

    return res.json(updatedseinen)
  }
}
