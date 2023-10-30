import express from 'express'
import {TipesController} from '../controllers/TipesController.js'

const TipesRoutes =  express.Router()

TipesRoutes.get('/categories/', TipesController.listCategories)

TipesRoutes.get('/roles/', TipesController.listRoles)

TipesRoutes.get('/specialities/', TipesController.listSpecialities)

export default TipesRoutes