// psuedo code to compare arrays
const arr1 = [
  { id: 0, ans: "apple" },
  { id: 1, ans: "orange" },
  { id: 2, ans: "mango" },
];
const arr2 = [
  { id: 0, ans: "apple" },
  { id: 1, ans: "orange" },
  { id: 2, ans: "mango" },
];

const check = (arr1, arr2) => {
  let score = 0;
  arr1.map((i, k) => (i.ans === arr2[k].ans ? (score += 1) : (score += 0)));
  return score;
};

console.log(check(arr1, arr2));
