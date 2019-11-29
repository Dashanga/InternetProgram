import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Predmet } from './../Predmet'

@Component({
  selector: 'app-raspisanie',
  templateUrl: './raspisanie.component.html',
  styleUrls: ['./raspisanie.component.less'],
  // providers: [HttpClient]
})
export class RaspisanieComponent implements OnInit {

  constructor(private http: HttpClient) { }
  predmets: Array<Predmet> = [];
  receivedData: Predmet;
  done: boolean = false;
  predmet: Predmet;
  str: string;

  ngOnInit() {
  }
  update_list(kurs: number) {
    this.http.get('http://localhost:5000/predmet/getList/' + kurs).subscribe((response: any) => {
      console.log("response", response);
      this.predmets = [];
      response.forEach(element => {
        this.predmets.push(element);
      });
    });
    console.log("debug", this.predmets);
  }

}
