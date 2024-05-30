import { Component, Input, computed, signal, input, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { NgFor } from '@angular/common';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

/*
interface User 
{
  id: string,
  name: string,
  avatar: string
}
*/

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  //@Input({required: true}) id!: string;
  //@Input({required: true}) avatar!: string; 
  //@Input({required: true}) name!: string;
  @Input({required: true}) user!: User
  @Input({required: true}) selected!: boolean;
  @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();
  
  /*
    avatar = input.required<string>();
    name = input.required<string>();
    iamgePath = compute(()=>{ return 'assets/users/' + this.avatar });
    // and change all the data request of user.component.html to function calls to access datas. THIS
    // IS VALID FOR ALL FUNCTIONS
  */

  get imagePath()
  {
    return 'assets/users/' + this.user.avatar;
  }

  onUserClicked()
  {
    this.userSelected.emit(this.user.id);
  }
}
