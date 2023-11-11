export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues(op1, op2) {
        this.operand1 = op1;
        this.operand2 = op2;
    },
    sum() {
        return this.operand1 + this.operand2;
    },
    mul() {
        return this.operand1 * this.operand2;
    }
};
