import { Component, OnInit } from '@angular/core';
import { Tip } from '../models/tip';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
	public titulo: string = 'Tips para cocinar mejor';
	public tip: Tip=new Tip('','');
  	public tips:Array<Tip>;

  constructor() {
  		this.tips = [
  		new Tip ('Papas fritas perfectas','Cortamos las papas en cuña y ponemos en agua fria durante 30 minutos (esto es para que pierda el almidon y no se peguen), Luego secamos bien las papas y mientras ponemos abundante aceite a calentar,freimos las papas y dejamos hasta que tomen el dorado que nos guste'),
  		new Tip ('Masa de pizza crocante','Hay 2 secretos para una buena pizza,el primero es el levado:mientras mas leve mas aireada estara y por ende lograremos una textura crocante en los bordes y una suavidad inconfundible la masa,la otra que nos parece fundamental agregar es que no te desesperes por ponerla en el horno,el horno tiene que estar bien caliente y ahora si podemos poner la masa.La pizzera o fuente donde pongamos la pizza siempre tiene que estar enaceitada,para que no se pegue cuando la saquemos'),
  		new Tip ('Carne desmechada','Para una carne desmechada o desmenuzada,tenemos que sellarla primero de todos sus lados, ya sea una pieza grande o una pieza pequeña.Luego de esto tenemos que ponerla en caldo para que no solo se termine de cocinar sino que a mas tiempo haciendose en los jugos del caldo mas tierna estará en el resultado final,lo de ponerla en caldo lo podes hacer en una cacerola a fuego directo o bien en el horno tapada con papel aluminio'),
  		new Tip ('Las mejores milanesas','Milanesas podemos hacer de cualquier cosa,de carne,de pollo,de cerdo,de berenjena,etc,etc,etc...Pero lo mas importante a tener en cuenta y el secreto de una buena milanesa es el huevo y el pan rallado con el que se la reboza,en este caso para un mejor rebozado y por ende una mejor milanesa recomendamos que al huevo le pongan 2 cdtas de mostaza de cualquier tipo,provenzal y un toque de leche.Esto lo mezclamos bien y ahi pondremos a maserar la carne o el vegetal que hayamos elegido para hacer la milanesa durante 30 minutos,con respecto al pan rallado es sencillo,le agregamos queso rallado de cualquier tipo y esto le va a dar un gusto intenso y agradable una vez cocida la milanesa.'),
  		new Tip ('Garbanzos y su versatilidad','Si consideras que es muy costoso comprar snacks hoy en día (ya sea papas fritas,palitos,chizitos,etc) tenes que saber que con una lata de garbanzos podes hacer un snack igual de rico pero mucho mas barato,para esto agarramos CUALQUIER lata de garbanzos y al colarla y secar bien los garbanzos los ponemos en una fuente con aceite y condimentos,ES MUY IMPORTANTE que los garbanzos no esten humedos asi cuando los ponemos al horno salen perfectos y hablando del horno los pondremos ahí durante 35 minutos a 180° y listo,son riquisimos y muy poca gente conoce este truco.')

  	]; 

  }

  ngOnInit(){
  }

}
