import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicios
import {TareaService} from '../../../services/tarea.service';
//clases
import { Tarea } from './../../../models/tarea';
@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor(private tareaService:TareaService ) { }

  ngOnInit() {
    this.tareaService.getTareas();
    this.resetForm();
  }

  onSubmit(formTarea:NgForm){
    this.tareaService.addTarea(formTarea.value);
    this.resetForm(formTarea);
  }

  resetForm(formTarea?:NgForm){
    if(formTarea!= null)
    formTarea.reset();
    this.tareaService.selectedTarea=new Tarea();
  }
}
