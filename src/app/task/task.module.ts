import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TaskFormComponent],
})
export class TaskModule { }
export interface Task {
  id : number;
  title: string;
  description: string;
}