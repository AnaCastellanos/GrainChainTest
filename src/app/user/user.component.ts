import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Output() emitUser = new EventEmitter
  public copyUser: any;
  public location: string;
  constructor() { }

  ngOnInit() {
    this.location = Object.assign(this.user.location.name, {})
  }


  public resetLocation() {
    this.location = this.user.location.name
  }

  public clickUser() { 
    let user = {...this.user, location: {
      name: this.location
    }}
    this.emitUser.emit(user)
  }

}