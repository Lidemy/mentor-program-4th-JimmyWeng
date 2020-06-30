function reverse(str) {
  var rev_str_arr = []
  for (let i = (str.length - 1); i >= 0; i--) { // 記得>=0不是=0，因為最後一個是第一個index繼續扣就會停
    rev_str_arr.push(str.split('')[i])
  }
  console.log(rev_str_arr.join(''))
}

// reverse('hello');

// reverse('yoyoyo')
// 正確輸出：oyoyoy

// reverse('1abc2')
// 正確輸出：2cba1

// reverse('1,2,3,2,1')
// 正確輸出：1, 2, 3, 2, 1
