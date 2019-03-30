import { Router } from 'express'

import tricksController from '../controllers/tricksController'

class TricksRoutes{

    public router: Router = Router()

    constructor(){
        this.config()
    }

    config():void{
        this.router.post('/',tricksController.create)
        this.router.get('/',tricksController.read)
        this.router.get('/:id',tricksController.readOne)
        this.router.put('/:id',tricksController.update)
        this.router.delete('/:id',tricksController.delete)
    }
}

const tricksRoutes = new TricksRoutes()
export default tricksRoutes.router

