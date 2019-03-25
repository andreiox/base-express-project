import { Router } from 'express'

import exampleRoutes from './example'

const apiRoutes = Router()

apiRoutes.use('/api/examples', exampleRoutes)

export default apiRoutes
