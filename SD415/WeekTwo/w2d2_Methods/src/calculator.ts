

export const calculator = {
    operand1: 0,
    operand2: 0,
  
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