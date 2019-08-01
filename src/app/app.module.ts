import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

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
import { NabvarComponent } from './components/nabvar/nabvar.component';
//services
import { TareaService } from './services/tarea.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareasListComponent,
    TareaComponent,
    NabvarComponent,
    HomepageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DashboardComponent,
    Page404Component,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
