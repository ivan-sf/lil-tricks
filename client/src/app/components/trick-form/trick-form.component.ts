import { Component, OnInit, HostBinding } from '@angular/core';
import { Trick } from 'src/app/models/trick';

import { TrickService } from '../../services/trick.service'
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-trick-form',
  templateUrl: './trick-form.component.html',
  styleUrls: ['./trick-form.component.css']
})
export class TrickFormComponent implements OnInit {
  

  @HostBinding('class') classes='row'

  trick: Trick = {
    id:0,
    title:'',
    description:'',
    image:'',
    link:'',
    created_at:new Date()
  }

  edit: boolean = false;

  constructor(private trickService:TrickService,private router:Router,private activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
    const params=this.activatedRoute.snapshot.params
    console.log(params)
    if(params.id){
      this.trickService.getTrick(params.id)
        .subscribe(
          res=>{
            console.log(res)
            this.trick = res
            this.edit = true
          }
        ),
        err=>console.log(err)
    }
  }

  saveNewTrick(){
    delete this.trick.created_at
    delete this.trick.id
    this.trickService.saveTrick(this.trick)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/tricks'])
      },
      err=>console.log(err)
    )
  }

  updateTrick(){
    delete this.trick.created_at

    this.trickService.updateTrick(this.trick.id,this.trick)
      .subscribe(
        res=>{
          console.log(res)
          this.router.navigate(['/tricks'])
        },
        err=>console.log(err)
      )
    
  }

}
