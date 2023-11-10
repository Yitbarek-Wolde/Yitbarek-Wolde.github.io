

export const calculator = {
    operand1: 2,
    operand2: 3,
  
    setValues(op1: number, op2: number): void {
      this.operand1 = op1;
      this.operand2 = op2;
    },
  
    sum(): number {
      return this.operand1 + this.operand2;
    },
  
    mul(): number {
      return this.operand1 * this.operand2;
    }
  }