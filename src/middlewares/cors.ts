import cors, { CorsOptions } from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:8080', 'http://localhost:4000']

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => {
  const corsOptions: CorsOptions = {
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allowed?: boolean) => void
    ) => {
      if (acceptedOrigins.includes(origin || '')) {
        return callback(null, true)
      }

      if (!origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  }

  return cors(corsOptions)
}
