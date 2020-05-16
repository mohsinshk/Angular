import { Component,OnInit } from '@angular/core';
import { IUser} from '../../interfaces/user'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 users:Array<IUser>;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }

}
