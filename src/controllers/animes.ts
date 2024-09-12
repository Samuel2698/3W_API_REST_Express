import { Request, Response } from 'express'
import { AnimesModel } from '../models/animes'
import { validatedAnimes, validatedPartialAnimes } from '../schemas/animes'

export class AnimesController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    const genre =
      typeof req.query.genre === 'string' ? req.query.genre : undefined

    const animes = await AnimesModel.getAll({ genre })

    return res.json(animes)
  }

  static async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const animes = await AnimesModel.getById({ id })
    if (animes) return res.json(animes)
    return res.status(404).json({ message: 'Animes not found' })
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const result = validatedAnimes(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newAnimes = await AnimesModel.create({ input: result.data })

    return res.status(201).json(newAnimes)
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const result = await AnimesModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Animes not found' })
    }

    return res.json({ message: 'Animes deleted' })
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const result = validatedPartialAnimes(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedAnimes = await AnimesModel.update({ id, input: result.data })

    return res.json(updatedAnimes)
  }
}
