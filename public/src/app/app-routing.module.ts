import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { EditFanComponent } from './edit-fan/edit-fan.component';
import { NewFanComponent } from './new-fan/new-fan.component';
import { NewComicComponent } from './new-comic/new-comic.component';
import { FanComicsComponent } from './fan-comics/fan-comics.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'edit/:id', component: EditFanComponent },
    { path: 'new', component: NewFanComponent },
    { path: 'comics', component: FanComicsComponent }
  ] },
  { path: 'comics', component: ComicsComponent, children: [
    { path: 'new', component: NewComicComponent }
  ] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
