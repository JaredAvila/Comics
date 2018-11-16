import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-fan',
  templateUrl: './edit-fan.component.html',
  styleUrls: ['./edit-fan.component.css']
})
export class EditFanComponent implements OnInit {
  fanToEdit = { name: "", _id: "" }
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    let fanID = this._route.params;
    fanID.subscribe(iD => {
      this.fanToEdit._id = iD['id'];
    })
    this.getFan();
  }
  getFan(){
    let obs = this._httpService.getOneFan(this.fanToEdit._id);
    obs.subscribe(data => {
      this.fanToEdit = data['success'];
      console.log(this.fanToEdit);
    })
  }
  editFan(){
    let obs = this._httpService.editFan(this.fanToEdit);
    obs.subscribe(data => {
      console.log("Fan updated: ", data);
      this._router.navigate(['/home']);
      this.fanToEdit = { name: "", _id: "" }
    })
  }
}
