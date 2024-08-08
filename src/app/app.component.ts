import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredictionService } from './prediction.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'social_ads';
  age: any;
  estimatedSalary: any;
  gender: any;
  predictionResult: any;
  errorMessage: any;

  constructor(private predictionService: PredictionService) {}

  predict() {
    console.log(this.age, this.estimatedSalary, this.gender)
    

    this.predictionService.predictPurchased(this.age, this.estimatedSalary, this.gender).subscribe(
      (result) => {
        this.predictionResult = result;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error predicting:', error);
        this.errorMessage = 'Error predicting. Please try again.';
      }
    );
  }
}
