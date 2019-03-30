import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
import tricksRoutes from './routes/tricksRoutes'

class Server {

    public app: Application

    constructor(){
        this.app=express()
        this.config()
        this.routes()
    }

    config(): void{
        this.app.set('port', process.env.port || 100)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(): void{
        this.app.use(indexRoutes)
        this.app.use('/api/tricks',tricksRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('SERVER ON PORT ',this.app.get('port'))
        })
    }

} 
const server = new Server()
server.start()