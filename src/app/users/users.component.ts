import { Component, OnInit } from '@angular/core';
import { Iusersstructure } from 'src/assets/data/usersstructure';
import { UsersdataServiceService } from '../usersdata-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: Iusersstructure[] = [];

  constructor(private userS: UsersdataServiceService) {}

  ngOnInit(): void {
    this.userS.getUser().subscribe(data => {
      this.userList = data;
    })
  }

  mapObj(): any {
    const { users }: any = this.userList;
    return users
  }
}
