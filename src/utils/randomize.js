// Randomize (general)

const randomize = (a, b) => {
  return Math.random() - 0.5;
}

// Basics

export const randInd = (arr) => {
  let array = [...arr];
  return array.sort(randomize)[0];
}

