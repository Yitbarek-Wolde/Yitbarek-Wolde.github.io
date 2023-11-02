export function compoundInterest(principal: number, rate: number, years: number): number {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const exact = principal * Math.pow(1 + monthlyRate, months);
    return parseFloat(exact.toFixed(2));
}