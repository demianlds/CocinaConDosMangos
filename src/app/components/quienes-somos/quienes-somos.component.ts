import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
public title: string;
public subtitle:string;
  
  constructor() { 
  	this.title="Bienvenido";

  	this.subtitle="Vas a ver que con poco podes hacer mucho";
  
  }

  ngOnInit(){
  }

}
