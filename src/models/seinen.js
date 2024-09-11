import { randomUUID } from 'node:crypto'
import { readJSON } from '../anime_categories/utils.js'

const seinen = readJSON('./seinen.json')

export class seinenModel {
  static async getAll({ genre }) {
    if (genre) {
      return seinen.filter((seinen) =>
        seinen.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      )
    }

    return seinen
  }

  static async getById({ id }) {
    const seinen = seinen.find((seinen) => seinen.id === id)
    return seinen
  }

  static async create({ input }) {
    const newseinen = {
      id: randomUUID(),
      ...input
    }

    seinen.push(newseinen)

    return newseinen
  }

  static async delete({ id }) {
    const seinenIndex = seinen.findIndex((seinen) => seinen.id === id)
    if (seinenIndex === -1) return false

    seinen.splice(seinenIndex, 1)
    return true
  }

  static async update({ id, input }) {
    const seinenIndex = seinen.findIndex((seinen) => seinen.id === id)
    if (seinenIndex === -1) return false

    seinen[seinenIndex] = {
      ...seinen[seinenIndex],
      ...input
    }

    return seinen[seinenIndex]
  }
}
