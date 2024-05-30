import { Inject, Injectable } from "@angular/core";
import { AddTask } from "./add-task.model";
import { Task } from "./task.model";
import { getLocaleCurrencyCode } from "@angular/common";

@Injectable({providedIn: 'root'})
export class TasksServices
{
    private tasks = 
    [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    constructor()
    {
        const tasks = localStorage.getItem('tasks');
        
        if(tasks)
        {
            this.tasks = JSON.parse(tasks)
        }
    }

    getSelectedUserTasks(userId: string)
    {
      return this.tasks.filter((task) => task.userId == userId);
    }

    addTask(task: AddTask, userId: string)
    {
        const toAddTask: Task = {id: "t"+this.getSelectedUserTasks(userId).length, userId: userId, title: task.title, summary: task.summary, dueDate: task.dueDate}
        this.tasks.push(toAddTask);
        this.saveTasks();
    }
    
    removeTask(taskId: string)
    {
        this.tasks = this.tasks.filter((task)=>taskId != task.id);
        this.saveTasks();
    }

    private saveTasks()
    {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}