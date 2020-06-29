function join(arr, concatStr) {
  let new_str = ''
  for (let i = 0; i < arr.length - 1; i++) {
    new_str += arr[i] + concatStr
  }
  // return new_str + arr.slice(-1) // 試試看
  return new_str + arr[arr.length - 1]
}

function repeat(str, times) {
  let new_str = ''
  for (let i = 0; i < times; i++) {
    new_str += str
  }
  return new_str
}

// console.log(join(['a'], '!')); // 感覺是要來抓那些不小心多印一次的
// console.log(join([1, 2, 3], '')) // 正確回傳值：123
// console.log(join(["a", "b", "c"], "!")) // 正確回傳值：a!b!c
// console.log(join(["a", 1, "b", 2, "c", 3], ',')) // 正確回傳值：a, 1, b, 2, c, 3

// console.log(repeat('a', 5));
// console.log(repeat('a', 5)) //正確回傳值：aaaaa
// console.log(repeat('yoyo', 2)) //正確回傳值：yoyoyoyo

