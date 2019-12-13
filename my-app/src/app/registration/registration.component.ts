import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Yuser } from './../Yuser'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [HttpClient]
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  // верхнее не там
  yusers: Array<Yuser> = [];
  receivedData: Yuser;
  done: boolean = false;
  yuser: Yuser;
  str: string;
  ngOnInit() {
  }

  submit(login: string, password: string, passwordrepeat: string) {
    if (password != passwordrepeat){
      alert("пароли не совпадают");
      return;
    }
    if (!password || !login){
      alert("заполните поля");
      return;
    }
    console.log(login, password)
    let yuser = new Yuser(login, password)
    console.log(this.yuser)
    this.http.post('http://localhost:5000/yuser/add', yuser).subscribe();
  }
}
