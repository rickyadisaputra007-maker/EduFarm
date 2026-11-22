export const acakArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};