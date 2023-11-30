import { Component,Input,OnInit } from '@angular/core';
import { Task } from '../task/task.module';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  
  @Input()task: Task = { id: 0, title: '', description: ''};
 

  constructor(private taskService: TaskService, private router: Router) {}
  



  saveTask(): void {
    if(this.task.id === 0) {
      this.taskService.addTask(this.task);
    } else {
      this.taskService.updateTask(this.task);
    }
    this.router.navigate(['/']);
    
  }

}
