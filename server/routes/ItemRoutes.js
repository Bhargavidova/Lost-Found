import express from 'express'
import createItem from '../controllers/Items/CreateItem.js'
import { validateJWT } from '../middlewares/validateToken.js'
import getAllItems from '../controllers/Items/getAllItems.js'
import getItemById from '../controllers/Items/getItemById.js'
import updateItem from '../controllers/Items/updateItem.js'
import deleteItem from '../controllers/Items/deleteItem.js'

const router = express.Router()

// Allow creating an item without authentication for now (remove validateJWT if you want open posting)
router.post('/newItem', createItem)

// Always return an array from getAllItems
router.get('/', getAllItems)
router.get('/:id', getItemById)
router.put('/update/:id', validateJWT, updateItem)
router.delete('/delete/:id', deleteItem)

export default router