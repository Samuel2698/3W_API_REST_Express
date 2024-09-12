import { createRequire } from 'module'
import path from 'path'

const requireUrl = createRequire(path.resolve(__dirname, './'))

export const readJSON = (relativePath: string): unknown => {
  const absolutePath = path.resolve(__dirname, relativePath)
  return requireUrl(absolutePath)
}
