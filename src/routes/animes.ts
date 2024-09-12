import { Router } from 'express'

import { AnimesController } from '../controllers/animes'

export const animesRouter = Router()

animesRouter.get('/', AnimesController.getAll)
animesRouter.post('/', AnimesController.create)

animesRouter.get('/:id', AnimesController.getById)
animesRouter.delete('/:id', AnimesController.delete)
animesRouter.patch('/:id', AnimesController.update)
