import { Component, VERSION, OnInit, OnDestroy } from '@angular/core';
import { RickService } from './rick.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {

  name = 'Angular ' + VERSION.major;
  public users: Array<any> = [];
  public subsRick: Subscription;
  public user: any;


  constructor(
    private rickService: RickService
  ) {}
  
  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.subsRick = this.rickService.getData().subscribe(
      (response) => {
        this.users = response.results
      }
    );
  }

  public assignUser(event) {
    this.user = event
  }

  ngOnDestroy() {
    this.subsRick.unsubscribe();
  }


}
