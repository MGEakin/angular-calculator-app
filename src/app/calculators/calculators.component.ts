import { Component, OnInit } from '@angular/core';

import { Calculator } from '../calculator';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent implements OnInit {
  calculators: Calculator[] = [];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.getCalculators();
  }

  getCalculators(): void {
    this.calculatorService.getCalculator(1)
      .subscribe(calculators => this.calculators[0] = calculators);
  }

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.calculators[0].mainDisplayText[this.calculators[0].mainDisplayText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
        this.calculators[0].operatorSet = true;
      }
      if ((this.calculators[0].operatorSet) || (this.calculators[0].mainDisplayText === '')) {
        return;
      }
      this.calculators[0].operand1 = parseFloat(this.calculators[0].mainDisplayText);
      this.calculators[0].operator = key;
      this.calculators[0].operatorSet = true;
    }
    if (this.calculators[0].mainDisplayText.length === 10) {
      return;
    }
    this.calculators[0].mainDisplayText += key;
  }
  allClear() {
    this.calculators[0].mainDisplayText = '';
    this.calculators[0].subDisplayText = '';
    this.calculators[0].operatorSet = false;
  }
  getAnswer() {
    this.calculators[0].calculationString = this.calculators[0].mainDisplayText;
    this.calculators[0].operand2 = parseFloat(this.calculators[0].mainDisplayText.split(this.calculators[0].operator)[1]);
    if (this.calculators[0].operator === '/') {
      this.calculators[0].subDisplayText = this.calculators[0].mainDisplayText;
      this.calculators[0].mainDisplayText = (this.calculators[0].operand1 / this.calculators[0].operand2).toString();
      this.calculators[0].subDisplayText = this.calculators[0].calculationString;
      if (this.calculators[0].mainDisplayText.length > 9) {
        this.calculators[0].mainDisplayText = this.calculators[0].mainDisplayText.substr(0, 9);
      }
    } else if (this.calculators[0].operator === 'x') {
      this.calculators[0].subDisplayText = this.calculators[0].mainDisplayText;
      this.calculators[0].mainDisplayText = (this.calculators[0].operand1 * this.calculators[0].operand2).toString();
      this.calculators[0].subDisplayText = this.calculators[0].calculationString;
      if (this.calculators[0].mainDisplayText.length > 9) {
        this.calculators[0].mainDisplayText = 'ERROR';
        this.calculators[0].subDisplayText = 'Range Exceeded';
      }
    } else if (this.calculators[0].operator === '-') {
      this.calculators[0].subDisplayText = this.calculators[0].mainDisplayText;
      this.calculators[0].mainDisplayText = (this.calculators[0].operand1 - this.calculators[0].operand2).toString();
      this.calculators[0].subDisplayText = this.calculators[0].calculationString;
    } else if (this.calculators[0].operator === '+') {
      this.calculators[0].subDisplayText = this.calculators[0].mainDisplayText;
      this.calculators[0].mainDisplayText = (this.calculators[0].operand1 + this.calculators[0].operand2).toString();
      this.calculators[0].subDisplayText = this.calculators[0].calculationString;
      if (this.calculators[0].mainDisplayText.length > 9) {
        this.calculators[0].mainDisplayText = 'ERROR';
        this.calculators[0].subDisplayText = 'Range Exceeded';
      }
    } else {
      this.calculators[0].subDisplayText = 'ERROR: Invalid Operation';
    }
    this.calculators[0].answered = true;
  }
}
