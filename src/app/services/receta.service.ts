import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { Global } from './global';

@Injectable()
export class RecetaService{
	public url:string;

	constructor(
		private _http: HttpClient 
		){

		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de angular';
	}

	saveReceta(receta: Receta): Observable<any>{
		let params = JSON.stringify(receta);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'save-receta',params,{headers:headers});
	}

	getRecetas(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'recetas', {headers:headers});
	}
}

