export const parseTiles = (tiles: string): string[] => {
  const tilePattern = /(\d+)([pmsz])/g;
  let match;
  const result: string[] = [];

  while ((match = tilePattern.exec(tiles)) !== null) {
    const [, numbers, suit] = match;
    for (const number of numbers) {
      result.push(`${number}${suit}`);
    }
  }

  return result;
};
