import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  constructor() { }

  public app_name:string='Backlog eieme';
  public isLogged:boolean=false;
  
  ngOnInit() {
  }

}
