// const arr = Array(9).fill(Math.random())
const arr = [];
for (let i = 0; i < 9; i++) {
  arr[i] = [];
  for (let j = 0; j < 9; j++) {
    arr[i][j] = i.toString() + j.toString()
  }
}
// const arr_2d = Array(9).fill(arr)
// console.log(arr);
console.log(arr[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 9)])
