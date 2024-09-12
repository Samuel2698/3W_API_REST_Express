import z from 'zod'

const animeschema = z.object({
  title: z.string({
    required_error: 'animes title is required',
    invalid_type_error: 'animes title must be an string'
  }),
  year: z.number().int().min(1895).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z.string().url(),
  rate: z.number().int().min(0).max(10).default(0),
  genre: z.array(
    z.enum([
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',
      'Thriller',
      'Sci-Fi',
      'Crime'
    ]),
    {
      required_error: 'animes genre is required',
      invalid_type_error: 'animes genre must be an array of strings'
    }
  )
})

export function validatedAnimes(input) {
  return animeschema.safeParse(input)
}

export function validatedPartialAnimes(input) {
  return animeschema.partial().safeParse(input)
}
