import { Component, OnInit } from '@angular/core';
import { Receta } from '../../models/receta';
import { RecetaService } from '../../services/receta.service';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [RecetaService]
})
export class RecetasComponent implements OnInit {
  	public titulo: string="Recetas con pocos ingredientes";
    public receta: Receta;
  	public recetas:Array<Receta>;
    public status: string='';

  constructor(private _recetaService: RecetaService) {
  	this.recetas = [
  		this.receta= new Receta ('','','','')

  	];
 
}

 
  ngOnInit(){
    this.getRecetas();
  }

  onSubmit(form:NgForm){
    console.log(this.receta);
    this._recetaService.saveReceta(this.receta).subscribe(
      (response:any) => {
        if(response.receta){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'failed';
        }

        },

      (error:any) => {
        console.log(<any>error);
      } 

      );
    
  }

  getRecetas(){
    this._recetaService.getRecetas().subscribe(

      (response:any) => {
        if(response.recetas){
          this.recetas = response.recetas;
        }
        
      },

      (error:any) => {
        console.log(<any>error);
      }

      );
  }


}


