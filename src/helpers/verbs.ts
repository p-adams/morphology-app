const pastTenseVerbData = [
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
  { suffix: "-" },
  { suffix: "ت" },
];

const presentTenseSuffixes = [];

export function producePastTenseConjugationsFromRoot(root: string) {
  const conjugations = [];
  for (let i = 0; i < pastTenseVerbData.length; i++) {
    const suffix = pastTenseVerbData[i].suffix;
    // since there is no dual first person, push '-' string to display no data available
    suffix === "-"
      ? conjugations.push(suffix)
      : conjugations.push(root.concat(suffix));
  }
  return conjugations;
}
