import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils'

interface Anime {
  id: string
  title: string
  genre: string[]
}

interface GetAllParams {
  genre?: string
}

interface GetByIdParams {
  id: string
}

interface CreateParams {
  input: Omit<Anime, 'id'>
}

interface UpdateParams {
  id: string
  input: Partial<Omit<Anime, 'id'>>
}

const isAnimeArray = (data: unknown): data is Anime[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        'id' in item &&
        'title' in item &&
        'genre' in item &&
        Array.isArray(item.genre)
    )
  )
}

const rawData = readJSON('../animes.json')

if (!isAnimeArray(rawData)) {
  throw new Error('Invalid data format in animes.json')
}

const animes: Anime[] = rawData

export class AnimesModel {
  static async getAll({ genre }: GetAllParams): Promise<Anime[]> {
    if (genre) {
      return animes.filter((anime) =>
        anime.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return animes
  }

  static async getById({ id }: GetByIdParams): Promise<Anime | undefined> {
    return animes.find((anime) => anime.id === id)
  }

  static async create({ input }: CreateParams): Promise<Anime> {
    const newAnime: Anime = {
      id: randomUUID(),
      ...input
    }

    animes.push(newAnime)

    return newAnime
  }

  static async delete({ id }: GetByIdParams): Promise<boolean> {
    const animeIndex = animes.findIndex((anime) => anime.id === id)
    if (animeIndex === -1) return false

    animes.splice(animeIndex, 1)
    return true
  }

  static async update({ id, input }: UpdateParams): Promise<Anime | false> {
    const animeIndex = animes.findIndex((anime) => anime.id === id)
    if (animeIndex === -1) return false

    animes[animeIndex] = {
      ...animes[animeIndex],
      ...input
    }

    return animes[animeIndex]
  }
}
