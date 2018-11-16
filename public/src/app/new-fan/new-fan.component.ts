import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-fan',
  templateUrl: './new-fan.component.html',
  styleUrls: ['./new-fan.component.css']
})
export class NewFanComponent implements OnInit {
  newFan = { name: "" }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  createFan(){
    let obs = this._httpService.newFan(this.newFan);
    obs.subscribe(data => {
      console.log("this is the data: ", data);
      this.newFan = { name: "" };
    });
  }
}
