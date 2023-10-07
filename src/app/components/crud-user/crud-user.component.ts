import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Phone } from 'src/app/models/phone';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent {
  @Input() user? : User;
  @Output() usersUpdated = new EventEmitter<User[]>();

  constructor(private userService: UserService) { } 

  ngOnInit(): void {
    document.getElementById('text').nodeValue='';
  }

  updateUser(user: User) {
    let phone = new Phone();
    let dddPhone = user.celular.split(" ");

    phone.ddd = dddPhone[0];
    phone.numero = dddPhone[1];
    phone.usuarioId = user.id;
    
    this.userService
    .updateUser(user)
    .subscribe((users: User[]) => this.usersUpdated.emit(users));
  }

  deleteUser(user: User) {
    this.userService
    .deleteUser(user)
    .subscribe((users: User[]) => this.usersUpdated.emit(users))
  }

  createUser(user: User) {
    let phone = new Phone();
    let dddPhone = user.celular.split(" ");

    phone.ddd = dddPhone[0];
    phone.numero = dddPhone[1];
    phone.usuarioId = user.id;

    this.userService
    .createUser(user)
    .subscribe((users: User[]) => this.usersUpdated.emit(users))
  }
}

