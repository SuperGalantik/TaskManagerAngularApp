import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from "../dummy-tasks";
import { type Task } from "./task.model";
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from '../shared/card/card.component';
import { TasksServices } from './tasks.service';

@Component
({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent 
{
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  constructor(private tasksService: TasksServices) {}

  public isAddingTask: boolean = false;
  public tasks: Task[] = dummyTasks;

  get selectedUserTasks()
  {
    return this.tasksService.getSelectedUserTasks(this.userId);
  }

  onStartAddTask()
  {
    this.isAddingTask = true;
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  }
  //selectedUser!: {id: string, avatar: string, name: string};
  //public users: {id: string, avatar: string, name: string}[] = DUMMY_USERS;

}
