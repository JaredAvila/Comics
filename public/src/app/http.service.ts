import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getFans() {
    return this._http.get('/api/fans');
  }
  newFan(fan) {
    return this._http.post('/api/fans/new', fan);
  }
  editFan(id) {
    return this._http.put('/api/fans/edit', id);
  }
  getComics(){
    console.log("in service now")
    return this._http.get('/api/comics');
  }
  newComic(comic) {
    return this._http.post('/api/comics/new', comic);
  }
  editComic(id) {
    return this._http.put('/api/comics/edit', id);
  }
  deleteComic(id) {
    return this._http.delete('/api/comics/delete', id);
  }
  getOneFan(id){
    let url = "/api/fans/fan/" + id;
    console.log("in service ", id);
    return this._http.get(url);
  }
}
