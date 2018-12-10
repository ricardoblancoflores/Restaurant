import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }
  logOption: boolean = false;
  suscribeObject;
  logClass = "nav-link text-light btn btn-success my-2 my-sm-0";
  ngOnInit() {     
    this.suscribeObject= this.authService.OptionLog.subscribe((s)=>{
        this.logOption = s;
        if(s){
          this.logClass = "nav-link text-light btn btn-danger my-2 my-sm-0";
        }else{
          this.logClass = "nav-link text-light btn btn-success my-2 my-sm-0";
        } 
    })
  }

  ngOnDestroy(){
    this.suscribeObject.unsuscribe();
  }

  logAction(){
    if(this.logOption){
      this.authService.userLogOut();
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
