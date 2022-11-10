import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [UsuarioService]
})
export class ContactoComponent implements OnInit {

	public title: string;
	public usuario: Usuario;
	public status: string='';

	constructor(
		private _usuarioService: UsuarioService
		){
		this.title= "Crear Usuario";
		this.usuario= new Usuario ('','','','');


	 } 

	ngOnInit() {

	}


	onSubmit(form:NgForm){
		console.log(this.usuario);
		this._usuarioService.saveUsuario(this.usuario).subscribe(
			response => {
				if(response.usuario){
					this.status = 'success';
					form.reset();
				}else{
					this.status = 'failed';
				}

				},

			error => {
				console.log(<any>error);
			}	

			);
		
	}

}