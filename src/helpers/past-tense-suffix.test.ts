import { producePastTenseConjugationsFromRoot } from "./verbs";
test("#producePastTenseConjugationsFromRoot produces correct singular, dual, and plural 3rd person masculine for سمع ", () => {
  expect(producePastTenseConjugationsFromRoot("سمع")).toEqual(
    expect.arrayContaining(["سمعوا", "سمعا", "سمع"])
  );
});
