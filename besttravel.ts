
function combineWithoutRepetitions(comboOptions: number[], comboLength: number) {
  // combinationTracker.comboOptions.push(comboOptions);
  //  combinationTracker.comboLength.push(comboLength);
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    let returnMe = comboOptions.map(comboOption => [comboOption]);
    return returnMe;
  }

  // Init combinations array.
  const combos: number[][] = [];

  // Extract characters one by one and concatenate them to combinations of smaller lengths.
  // We need to extract them because we don't want to have repetitions after concatenation.
  comboOptions.forEach((currentOption: number, optionIndex: number) => {
    //  combinationTracker.currentOption.push(currentOption);
    //  combinationTracker.optionIndex.push(optionIndex);
    // Generate combinations of smaller size.
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1,
    );
    // combinationTracker.smallerCombos.push(smallerCombos);
    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });
  //  combinationTracker.combos.push(combos);
  return combos;
}
function rdc(arr: number[]) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  })
}

function chooseBestSum(t: number, k: number, ls: number[]): number | null {
  let townCombos = combineWithoutRepetitions(ls, k);;
  let townComboSorted = townCombos.sort((a, b) => rdc(b) - rdc(a));
  for (let candidate of townComboSorted) {
    //@ts-ignore
    if (rdc(candidate) <= t) {
      return rdc(candidate);
    }
  }
  return null;
}
