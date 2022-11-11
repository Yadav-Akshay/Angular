// import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input()
  usersData: any ={
    name: "",
    lastName:""
  }


  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getUsers().subscribe((data) => {
      this.usersData = data;
    })
  }


}
