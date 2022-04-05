import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  email?: string;
  passaword?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
