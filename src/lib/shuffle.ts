export function shuffle(numbers: { rank: string; value: number }[]): { rank: string; value: number }[] {
    const shuffled: { rank: string; value: number }[] = [...numbers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}