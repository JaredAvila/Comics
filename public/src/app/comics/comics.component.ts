import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  comics = [];
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    console.log("off we go!");
    let obs = this._httpService.getComics();
    obs.subscribe(data => {
      console.log("this is all the comics: ", data)
      this.comics = data['success'];
    })
  }

}
