// Randomize (general)

const randomize = (a, b) => {
  return Math.random() - 0.5;
}

// Basics

export const randInd = (arr) => {
  let array = [...arr];
  return array.sort(randomize)[0];
}

export const randList = (arr, num) => {
  let array = [...arr];
  return array.sort(randomize).slice(0, num);
}