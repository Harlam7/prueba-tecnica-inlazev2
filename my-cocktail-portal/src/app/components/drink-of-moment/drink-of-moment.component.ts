// drink-of-moment.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-of-moment',
  standalone: true,
  templateUrl: './drink-of-moment.component.html',
  styleUrls: ['./drink-of-moment.component.css']
})
export class DrinkOfMomentComponent implements OnInit {
  drink: any; // Puedes definir una interfaz para tipar los datos del trago.

  ngOnInit() {
    // Aquí puedes obtener los datos del trago de algún servicio o fuente de datos.
    this.drink = {
      name: 'Gin',
      image: 'assets/Gin.png',
      description: 'Gin, also known as gin, is one of the most popular and appreciated alcoholic beverages worldwide, especially for its versatility in cocktails. Originally from Europe, this spirit has evolved over the centuries and comes in a wide range of styles and flavors.',
      ingredients: 'Tequila, Triple Sec, Lime Juice',
      instructions: 'Shake all ingredients with ice and strain into a chilled glass.'
    };
  }
}
