import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  // id, name, username and email

  @Input() user: User;

  @Output()
  delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteItem() {
    // console.log(this.user.id);
    this.delete.emit(this.user.id);
  }
}
