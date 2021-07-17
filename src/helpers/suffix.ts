const pastTenseSuffixes = [
  "وا",
  "ا",
  "",
  "ن",
  "تا",
  "ت",
  "تم",
  "تما",
  "ت",
  "تن",
  "تما",
  "ت",
  "نا",
  "",
  "ت",
];
export function produceConjugationsFromRoot(root: string) {
  const conjugations = [];
  for (let i = 0; i < 15; i++) {
    // since there is no dual first person, push empty string to render blank row
    i === 13
      ? conjugations.push("")
      : conjugations.push(root.concat(pastTenseSuffixes[i]));
  }
  return conjugations;
}
