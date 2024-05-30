import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from '../add-task.model';
import { TasksServices } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent 
{
  task: AddTask = {title: '', summary: '', dueDate: ''};
  @Output() close = new EventEmitter();
  @Input({required: true}) userId!: string;
  private taskService = inject(TasksServices);
  
  onCancelNewTask()
  {
    this.close.emit();
  }

  onCreateNewTask()
  {
    this.taskService.addTask(this.task, this.userId);
    this.close.emit();
  }
}
