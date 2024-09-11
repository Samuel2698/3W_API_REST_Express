import z from 'zod'

const seinenchema = z.object({
  title: z.string({
    required_error: 'seinen title is required',
    invalid_type_error: 'seinen title must be an string'
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
      required_error: 'seinen genre is required',
      invalid_type_error: 'seinen genre must be an array of strings'
    }
  )
})

export function validatedseinen(input) {
  return seinenchema.safeParse(input)
}

export function validatedPartialseinen(input) {
  return seinenchema.partial().safeParse(input)
}
