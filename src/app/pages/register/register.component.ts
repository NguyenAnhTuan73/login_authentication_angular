import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}
  registerForm = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.compose([Validators.required])),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ])
    ),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isActive: this.builder.control(false),
  });

  ngOnInit(): void {}
  signup() {
    console.log('hello');
  }
  registration() {
    console.log(this.registerForm)
    if (this.registerForm) {
      this.service.registerData(this.registerForm.value).subscribe((res) => {
        if(res){
          this.toastr.success(
            'Please contact admin for enable to access User',
            'Register successfull'
          );
          this.router.navigate(['login'])

        }
      });
    } else {
      this.toastr.warning('Please Enter Valid Data');
    }
  }
}
