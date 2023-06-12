import { Component } from '@angular/core';
import{EnrollService }from '../Services/enroll.service'

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {

  
  title ="javascript course";
  constructor(private enrollservice : EnrollService){}
 
  enRoll(){
  
    this.enrollservice.OnEnrollClicked(this.title)

  }
}
