import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.module';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  router: any;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  editTask(id: number): void {
    
    const taskToEdit = this.taskService.getTaskById(id);
  
    if (taskToEdit) {
      console.log('Editing task:', taskToEdit) 
    } else {
      console.error('Task not found');
    }
  }

  

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getAllTasks(); 
    alert('Task deleted successfully');
  }
}



