import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {

  title ="Angular course";

  constructor(private enRollService : EnrollService){}
  enRoll(){

    // const enRollService = new EnrollService();
    this.enRollService.OnEnrollClicked(this.title);


  }
 

}
