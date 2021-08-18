import { Injectable } from '@angular/core';
import { Calculator } from './calculator';
// import { CALCULATOR } from './mock-calculator';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  // getCalculator(): Observable<Calculator[]> {
    // const calculator = of(CALCULATOR);
    // return calculator;
  // }
}
