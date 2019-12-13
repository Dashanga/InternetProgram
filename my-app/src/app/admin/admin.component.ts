import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predmet } from './../Predmet'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [HttpClient]
})

export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  // верхнее не там
  predmets: Array<Predmet> = [];
  receivedData: Predmet;
  done: boolean = false;
  predmet: Predmet;
  str: string;
  ngOnInit() {
    this.update_list();
  }

  submit(tip: string, day: number, week: string, name: string, para: number, fakultet: string, kurs: number, teacher: string) {
    console.log(tip, day, week, name, para, fakultet, kurs, teacher)
    let predmet = new Predmet(tip, day, week, name, para, fakultet, kurs, teacher)
    console.log(this.predmet)
    this.http.post('http://localhost:5000/predmet/add', predmet).subscribe(data=>{
      this.update_list();
    });
  }

  delete(id: number) {
    console.log(id)
    this.http.delete('http://localhost:5000/predmet/delete/' + id).subscribe(data=>{
      this.update_list();
    });
  }

  update(tip: string, day: number, week: string, name: string, para: number, fakultet: string, kurs: number, teacher: string, id: number) {
    console.log(id)
    let predmet = new Predmet(tip, day, week, name, para, fakultet, kurs, teacher)
    this.http.put('http://localhost:5000/predmet/update/' + id, predmet).subscribe(data=>{
      this.update_list();
    });
  }

  update_list(){
    this.http.get('http://localhost:5000/predmet/list').subscribe((response: any) => {
      console.log("response", response);
      this.predmets = [];
      response.forEach(element => {
        this.predmets.push(element);
      });
    });
    console.log("debug",this.predmets);
  }
} 
