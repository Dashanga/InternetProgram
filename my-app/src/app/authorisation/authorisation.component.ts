import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Yuser } from './../Yuser'
import { Router } from '@angular/router';
import { AuthorisationService } from "./authorisation.service";

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.less'],
  providers: [HttpClient]
})
export class AuthorisationComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router, private authService: AuthorisationService) { }
  
  // верхнее не там
  yusers: Array<Yuser> = [];
  receivedData: Yuser;
  done: boolean = false;
  yuser: Yuser;
  str: string;
  ngOnInit() {
  }

  submit(login: string, password: string) {
    if (!password || !login){
      alert("заполните поля");
      return;
    }
    console.log(login, password)
    let yuser = new Yuser(login, password)
    console.log(this.yuser)
    this.http.post('http://localhost:5000/yuser/check', yuser).subscribe(
      (data:Yuser) => {
        localStorage.setItem("token", data.token)
        localStorage.setItem("isAdmin", data.admin.toString())
        console.log(localStorage)
        this.authService.login()
        this.router.navigate(['/main']);}
    );
  }

}
