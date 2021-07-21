const pastTenseSuffixes = [
  { suffix: "وا" },
  { suffix: "ا" },
  { suffix: "" },
  { suffix: "ن" },
  { suffix: "تا" },
  { suffix: "ت" },
  { suffix: "تم" },
  { suffix: "تما" },
  { suffix: "ت" },
  { suffix: "تن" },
  { suffix: "تما" },
  { suffix: "ت" },
  { suffix: "نا" },
  { suffix: "" },
  { suffix: "ت" },
];
export function producePastTenseConjugationsFromRoot(root: string) {
  const conjugations = [];
  for (let i = 0; i < 15; i++) {
    // since there is no dual first person, push empty string to render blank row
    i === 13
      ? conjugations.push("")
      : conjugations.push(root.concat(pastTenseSuffixes[i].suffix));
  }
  return conjugations;
}
