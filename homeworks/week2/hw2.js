function capitalize(str) {
  if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
    return String.fromCharCode(str.charCodeAt(0) - 32) + str.slice(1)
  } else {
    return str
  }
}

// console.log(capitalize('hello'))
// console.log(capitalize('nick'))
// 正確回傳值：Nick

// console.log(capitalize('Nick'))
// 正確回傳值：Nick

// console.log(capitalize(',hello'))
// 正確回傳值：, hello