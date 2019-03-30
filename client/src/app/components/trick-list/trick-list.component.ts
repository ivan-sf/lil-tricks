import { Component, OnInit, HostBinding } from '@angular/core';
import { TrickService } from '../../services/trick.service'
import { Trick } from 'src/app/models/trick';

@Component({
  selector: 'app-trick-list',
  templateUrl: './trick-list.component.html',
  styleUrls: ['./trick-list.component.css']
})
export class TrickListComponent implements OnInit {
  @HostBinding('class')classes='row'

  tricks:any=[];

  constructor(private trickService:TrickService) { }

  ngOnInit() {
    this.getTricks()
  }

  getTricks(){
    this.trickService.getTricks().subscribe(
      res=>{
        console.log(res)
        this.tricks = res
      },
      err=>console.log(err)
    )
  }
  deleteTrick(id:string){
    this.trickService.deleteTrick(id).subscribe(
      res=>{
        console.log(res)
        this.getTricks()
      },
      err=>console.log(err)
    )
  }
  editTrick(id:string){
    console.log(id)
  }

}
