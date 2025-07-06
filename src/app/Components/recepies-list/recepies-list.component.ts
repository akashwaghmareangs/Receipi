import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies-list',
  standalone: false,
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent implements OnInit {
  recipes = [];

  constructor(){

  }
  ngOnInit(): void {
  
  }

}
