import { Component, OnInit } from '@angular/core';

import { AuthorisationService } from "../authorisation/authorisation.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthorisationService) { }

  isAdmin = false;
  ngOnInit() {
    this.isAdmin = localStorage.getItem('isAdmin') == 'true'
  }

  logout(){
    this.authService.logout();
  }

}
