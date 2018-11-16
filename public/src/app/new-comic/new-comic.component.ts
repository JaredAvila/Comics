import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html',
  styleUrls: ['./new-comic.component.css']
})
export class NewComicComponent implements OnInit {
  newComic = { name: "", imgUrl: "" }
  constructor(private _httService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  createComic(){
    let obs = this._httService.newComic(this.newComic);
    obs.subscribe(data => {
      console.log("Made a new comic: ", data);
      this.newComic = { name: "", imgUrl: "" };
      this._router.navigate(['/comics']);
    })
  }

}
