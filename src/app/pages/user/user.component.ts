import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  list: any;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.GetAllUser();
  }

  GetAllUser() {
    this.userService.GetAllUser().subscribe(resp => {
      this.list = resp;
      console.log('Resp ', this.list);
    });
  }

}
