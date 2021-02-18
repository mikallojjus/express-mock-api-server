import * as express from 'express'
import { json, urlencoded } from 'body-parser'

import { createCoordinatesApi } from './example/api'
import { DB } from './db'

type Props = {
  db: DB
}

export const createApp = ({ db }: Props) => {
  const coordinateApi = createCoordinatesApi({ db })

  return express()
    .use(json())
    .use(urlencoded({ extended: false }))
    .use('/api/coordinates', coordinateApi)
}
