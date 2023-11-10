export const calculator = {
    operand1: 2,
    operand2: 3,
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
