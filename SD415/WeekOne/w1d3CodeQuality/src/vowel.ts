export function isVowel(char: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}