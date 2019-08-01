import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router:Router
  ) { }
  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.RegisterUser(this.email,this.password)
    .then((res)=>{
      console.log('Usuario creado con exito');
      console.log(res);
      this.router.navigate(['/dashboard']);
    }).catch((err)=>{
      console.log('Algo salio mal :(');
      console.log(err);
    });
  }

}
