import {Request,Response} from 'express'
import pool from '../database'

class TricksController{
    
    public async create (req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO tricks set ?',[req.body])
        console.log(req.body)
        res.json({name:'Trick Saved'})
    }
    public async read (req:Request,res:Response){
        const trick = await pool.query('SELECT * FROM tricks')
        res.json(trick)
    }
    public async readOne (req:Request,res:Response){
        const {id}= req.params
        const trick = await pool.query('SELECT * FROM tricks WHERE id=?',[id])
        if(trick.length>0){
           return res.json(trick[0])
        }else{
            res.status(404).json({text:"No se encontro el truco !"})
        }
    }
    public async update (req:Request,res:Response){
        const {id}= req.params
        const trick = await pool.query('UPDATE tricks SET ? WHERE id=?',[req.body,id])        
        if(trick){
            res.json({text: "Usuario editado"})
        }else{
            res.status(500).json({name:'Ah ocurrido un error'})
        }
    }
    public async delete (req:Request,res:Response){
        const {id}= req.params
        const trick = await pool.query('DELETE FROM tricks WHERE id=?',[id])
        if(trick){
            res.json({text:"Truco eliminado"})
        }
    }
}

const tricksController = new TricksController()
export default tricksController