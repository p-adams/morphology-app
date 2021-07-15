const pastTenseSuffixes = [
  "",
  "ا",
  "وا",
  "ت",
  "تا",
  "ن",
  "ت",
  "تما",
  "تم",
  "ت",
  "تما",
  "تن",
  "ت",
  "نا",
];
export function produceConjugationsFromRoot(root: string) {
  const conjugations = [];
  for (let i = 0; i < 14; i++) {
    conjugations.push(root.concat(pastTenseSuffixes[i]));
  }
  return conjugations;
}
