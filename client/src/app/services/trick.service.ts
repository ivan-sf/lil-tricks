import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Trick } from '../models/trick'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrickService {

  API_URI = 'http://localhost:100/api'

  constructor(private http:HttpClient) { }

  getTricks(){
    return this.http.get(this.API_URI+"/tricks")
  }

  getTrick(id:string):Observable<Trick>{
    return this.http.get(this.API_URI+'/tricks/'+id)    
  }

  saveTrick(trick:Trick){
    return this.http.post(this.API_URI+'/tricks', trick)    
  }

  deleteTrick(id:string){
    return this.http.delete(this.API_URI+'/tricks/'+id)    
  }

  updateTrick(id:string|number, updateTrick:Trick){
    return this.http.put(this.API_URI+'/tricks/'+id, updateTrick)    
  }

}
