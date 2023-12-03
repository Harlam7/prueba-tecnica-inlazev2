// // import { Component } from '@angular/core';
// import { Component, EventEmitter, Output, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   template: `
//     <footer>
//       <div *ngFor="let letter of alphabet" (click)="selectLetter(letter)">
//         {{ letter }}
//       </div>
//     </footer>
//   `,
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent {

//   @Output() letterSelected = new EventEmitter<string>();

//   alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   selectLetter(letter: string): void {
//     this.letterSelected.emit(letter);
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
