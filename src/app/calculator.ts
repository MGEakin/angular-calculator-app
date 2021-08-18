export interface Calculator {
  id: number;
  title: string;
  subDisplayText: string;
  mainDisplayText: string;
  operand1: number;
  operand2: number;
  operator: string;
  calculationString: string;
  // This string  denotes the operation being performed
  answered: boolean;
  //  flag to check whether the solution has been processed
  operatorSet: boolean;
}
