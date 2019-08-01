import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
//components
import { TareasComponent } from './components/tareas/tareas.component';
import { TareasListComponent } from './components/tareas/tareas-list/tareas-list.component';
import { TareaComponent } from './components/tareas/tarea/tarea.component';
//services
import { TareaService } from './services/tarea.service';
import { NabvarComponent } from './components/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareasListComponent,
    TareaComponent,
    NabvarComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
