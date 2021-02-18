import * as http from 'http'

import { createApp } from './app'
import { db } from './db'

const port = 3001
const app = createApp({ db })

http
  .createServer(app)
  .listen(port)
  .on('listening', () =>
    console.log(`JSON Server is running on http://localhost:${port}`)
  )
