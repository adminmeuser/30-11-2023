import { Injectable } from '@angular/core';
import { Task } from './task/task.module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  
  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    const task = this.tasks.find(task=> task.id === id);
    return task ? {...task} : undefined;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if(index !== -1) {
      this.tasks[index] = updatedTask;
    }
  } 

  deleteTask(id: number): void {
    const index = this.tasks.findIndex(task =>task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
