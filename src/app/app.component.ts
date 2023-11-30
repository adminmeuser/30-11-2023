import { Component,OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements OnInit {
//   title = 'angular';

//   bookForm!: FormGroup;

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.bookForm = this.fb.group({
//       bookName: [''],
//       author: [''],
//       publication: [''],
//       price: [''],
//       genre: [''],
//       publicationDate: [''],
//       country: [''],
//       description: ['']
//     });
//   }

//   onSubmit() {
//     console.log(this.bookForm.value);  
//   }
// }
export class AppComponent {
  title = 'angular';
}