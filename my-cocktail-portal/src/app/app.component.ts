import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CocktailListComponent } from "./components/cocktail-list/cocktail-list.component";
import { HeaderComponent } from './components/header/header.component';
import { DrinkOfMomentComponent } from './components/drink-of-moment/drink-of-moment.component';
import { FooterComponent } from './components/footer/footer.component';

// import { DetailComponent } from "./components/detail/detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CocktailListComponent, HeaderComponent,
      DrinkOfMomentComponent, FooterComponent]
})
export class AppComponent {
  title = 'cocktails';
}
