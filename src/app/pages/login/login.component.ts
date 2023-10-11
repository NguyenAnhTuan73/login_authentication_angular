import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData:any
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}
  loginForm = this.builder.group({
    username: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required),
  });

  login() {
    if (this.loginForm.valid) {
      this.service.getById(this.loginForm.value.username).subscribe((res) => {
        this.userData = res;
        console.log(this.userData)
        if(this.userData.password === this.loginForm.value.password){
          if(this.userData.isactive){
            sessionStorage.setItem('username', this.userData.id)
            sessionStorage.setItem('role', this.userData.role)
            this.router.navigate(['home'])
          }else{
            this.toastr.error('Please Contact to admin')
          }
        }else{
          this.toastr.error('Invalid Credentials')
        }
      });
    }else{
      this.toastr.warning('Please Enter valid data ')
    }
  }
}
