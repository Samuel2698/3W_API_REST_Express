import { Router } from 'express'

import { seinenController } from '../controllers/seinen.js'

export const seinenRouter = Router()

seinenRouter.get('/', seinenController.getAll)
seinenRouter.post('/', seinenController.create)

seinenRouter.get('/:id', seinenController.getById)
seinenRouter.delete('/:id', seinenController.delete)
seinenRouter.patch('/:id', seinenController.update)
