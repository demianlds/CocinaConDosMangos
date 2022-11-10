import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Global } from './global';

@Injectable()
export class UsuarioService{
	public url:string;

	constructor(
		private _http: HttpClient 
		){

		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de angular';
	}

	saveUsuario(usuario: Usuario): Observable<any>{
		let params = JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'save-usuario',params,{headers:headers});
	}
}