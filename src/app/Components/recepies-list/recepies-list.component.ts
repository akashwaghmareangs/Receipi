import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../modal/recipe.model';

@Component({
  selector: 'app-recepies-list',
  standalone: false,
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Its a Good receipe', 'This is a simply test', 'https://imgs.search.brave.com/w_zln1s0k1W-QuBAhblfjAJJIGIuL5QQ8Na3jySV2v0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnNh/bmVseWdvb2RyZWNp/cGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wOC9I/b21lbWFkZS1BbWVy/aWNhbi1GcmllZC1T/dGVhay13aXRoLU1h/c2hlZC1Qb3RhdG9l/cy1hbmQtV2hpdGUt/R3JhdnktODAweDUz/MC5qcGc'),
     new Recipe('Its a Good receipe', 'This is a simply test', 'https://imgs.search.brave.com/w_zln1s0k1W-QuBAhblfjAJJIGIuL5QQ8Na3jySV2v0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnNh/bmVseWdvb2RyZWNp/cGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wOC9I/b21lbWFkZS1BbWVy/aWNhbi1GcmllZC1T/dGVhay13aXRoLU1h/c2hlZC1Qb3RhdG9l/cy1hbmQtV2hpdGUt/R3JhdnktODAweDUz/MC5qcGc'),
      new Recipe('Its a Good receipe', 'This is a simply test', 'https://imgs.search.brave.com/w_zln1s0k1W-QuBAhblfjAJJIGIuL5QQ8Na3jySV2v0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnNh/bmVseWdvb2RyZWNp/cGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wOC9I/b21lbWFkZS1BbWVy/aWNhbi1GcmllZC1T/dGVhay13aXRoLU1h/c2hlZC1Qb3RhdG9l/cy1hbmQtV2hpdGUt/R3JhdnktODAweDUz/MC5qcGc')
  ];

  constructor() {

  }
  ngOnInit(): void {

  }

}
 