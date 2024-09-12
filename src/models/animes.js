import { randomUUID } from 'node:crypto'
import { readJSON } from '../anime_categories/utils.js'

const animes = readJSON('./animes.json')

export class animesModel {
  static async getAll({ genre }) {
    if (genre) {
      return animes.filter((animes) =>
        animes.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      )
    }

    return animes
  }

  static async getById({ id }) {
    const animes = animes.find((animes) => animes.id === id)
    return animes
  }

  static async create({ input }) {
    const newanimes = {
      id: randomUUID(),
      ...input
    }

    animes.push(newanimes)

    return newanimes
  }

  static async delete({ id }) {
    const animesIndex = animes.findIndex((animes) => animes.id === id)
    if (animesIndex === -1) return false

    animes.splice(animesIndex, 1)
    return true
  }

  static async update({ id, input }) {
    const animesIndex = animes.findIndex((animes) => animes.id === id)
    if (animesIndex === -1) return false

    animes[animesIndex] = {
      ...animes[animesIndex],
      ...input
    }

    return animes[animesIndex]
  }
}
