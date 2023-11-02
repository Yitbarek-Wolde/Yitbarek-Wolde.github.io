export function computeSalesCommission(salaried: boolean, sales: number): number {
    if (salaried) {
        return 0;
    } else {
        if (sales <= 300) {
            return 0;
        } else if (sales <= 1500) {
            return sales * 0.02;
        } else {
            return sales * 0.03;
        }
    }
}

export function compoundInterest(principal: number, rate: number, time: number): number {
    const monthlyRate = rate / 100 / 12;
    const months = time * 12;
    return principal * Math.pow(1 + monthlyRate, months);
}
