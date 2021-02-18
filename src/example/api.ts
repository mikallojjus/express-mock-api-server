import * as express from 'express'

import { ApiRequestHandler } from '../types'
import { DB } from '../db'

import { Coordinate } from './mockData'

type Props = {
  db: DB
}

export const createCoordinatesApi = ({ db }: Props) => {
  const get: ApiRequestHandler = (_, res) => res.json(db.coordinates)

  const post: ApiRequestHandler = (req, res) => {
    const { x, y }: Coordinate = req.body 
    db.coordinates = [...db.coordinates, { x, y }]

    res.sendStatus(200)
  }

  return express
    .Router()
    .get('/', get)
    .post('/', post)
}
