import { Component, OnInit } from '@angular/core';

export class NewUserInfo {
  name: string;
  address: string;
  email: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  // public userData: any;
  // model: NewUserInfo = new NewUserInfo();

  title = 'All Users';
  users: NewUserInfo[] = [
    {
      name: 'Bhupinder',
      address: 'Mohali',
      email: 'Bhupinder@gmail.com',
    },
    {
      name: 'Mona',
      address: 'Chandigarh',
      email: 'mona@gmail.com',
    },
    {
      name: 'Shifali',
      address: 'Mohali',
      email: 'Shifali@gmail.com',
    }
  ];
  /****add new user to list****/
  addNewUser(userData : NewUserInfo){
    this.users.push(userData);
  }
  /****delete user from list****/
  deleteNewUser(user: any){
    const index: number = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
