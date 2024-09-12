import { Router } from 'express'

import { animesController } from '../controllers/animes.js'

export const animesRouter = Router()

animesRouter.get('/', animesController.getAll)
animesRouter.post('/', animesController.create)

animesRouter.get('/:id', animesController.getById)
animesRouter.delete('/:id', animesController.delete)
animesRouter.patch('/:id', animesController.update)
