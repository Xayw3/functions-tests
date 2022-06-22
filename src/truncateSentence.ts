function truncateSentence(s: string, k: number): string {
  return s.split(" ").splice(0, k).join(" ")
};

export default truncateSentence;