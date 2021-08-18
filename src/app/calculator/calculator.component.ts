import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator[] = [];

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    // this.getCalculator();
  }
  // getCalculator(): void {
  //   this.calculator = this.calculatorService.getCalculator();
  // }
}
