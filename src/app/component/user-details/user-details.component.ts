import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser} from '../../interfaces/user'
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;

  users:Array<IUser>;
  constructor(private activeRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers();

    this.activeRoute.params.subscribe( (params)=>{
  //console.log('Got the Params-observable as:',params);
 this.user= this.users.filter( (user)=> {
    return user.id == +params.userid;
    })[0];
  });
  this.activeRoute.queryParams.subscribe((qs)=>console.log('Get the Qs as:', qs));
}

}
