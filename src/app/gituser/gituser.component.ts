import { Component, OnInit } from '@angular/core';
import { GitService } from './gituser.service';

@Component({
  selector: 'app-gituser',
  templateUrl: './gituser.component.html',
  styleUrls: ['./gituser.component.css']
})
export class GituserComponent implements OnInit {

  public userData;
  constructor( private gitService: GitService ) { }

  ngOnInit() {
    this.userData = [];
    this.getGitDetails();
  }

  getGitDetails() {
    this.gitService.getUserDetails().subscribe( res => {
      this.userData = res;
    })
  }

}
