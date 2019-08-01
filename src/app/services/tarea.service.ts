import { Tarea } from './../models/tarea';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareaLits: AngularFireList<any>;
  selectedTarea:Tarea=new Tarea();

  constructor(private firebase: AngularFireDatabase) { }

  getTareas() {
    return this.tareaLits = this.firebase.list('Tareas');
  }

  addTarea(tarea: Tarea) {
    this.tareaLits.push({
      Proyecto: tarea.Proyecto,
      Sprint: tarea.Sprint,
      Tipo: tarea.Tipo,
      Rol: tarea.Rol,
      Historia_de_Usuario: tarea.Historia_de_Usuario,
      Criterios_de_Aceptacion: tarea.Criterios_de_Aceptacion,
      Necesita_id: tarea.Necesita_id,
      Prioridad: tarea.Prioridad,
      Riesgo: tarea.Riesgo,
      Tarea: tarea.Tarea,
      Tiempo_estiamdo: tarea.Tiempo_estiamdo,
      Asignado: tarea.Asignado,
      Fecha_inicio: tarea.Fecha_inicio,
      Fecha_fin_Estimada: tarea.Fecha_fin_Estimada,
      Estado:tarea.Estado
    });
  }

  updateTarea(tarea: Tarea) {
    this.tareaLits.update(tarea.$Key, {
      Proyecto: tarea.Proyecto,
      Sprint: tarea.Sprint,
      Tipo: tarea.Tipo,
      Rol: tarea.Rol,
      Historia_de_Usuario: tarea.Historia_de_Usuario,
      Criterios_de_Aceptacion: tarea.Criterios_de_Aceptacion,
      Necesita_id: tarea.Necesita_id,
      Prioridad: tarea.Prioridad,
      Riesgo: tarea.Riesgo,
      Tarea: tarea.Tarea,
      Tiempo_estiamdo: tarea.Tiempo_estiamdo,
      Tiempo_trabajado: tarea.Tiempo_trabajado,
      Asignado: tarea.Asignado,
      Fecha_inicio: tarea.Fecha_inicio,
      Fecha_fin_Estimada: tarea.Fecha_fin_Estimada,
      Fecha_fin_Real: tarea.Fecha_fin_Real,
      Estado: tarea.Estado
    });
  }

  deleteTarea($Key:string){
    this.tareaLits.remove($Key);
  }
}
