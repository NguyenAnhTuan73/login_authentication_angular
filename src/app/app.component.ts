import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router:Router){}
  title = 'login_authencation_angular';
  ngOnInit(): void {

  }
  login(){
    this.router.navigate(['login',1])
  }
  register(){
    this.router.navigate(['register'])
  }
}
