``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  } // 判斷是否大於零
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 2 行，吃一個 array ，進入 function
2. 執行第 3 行，宣告一個變數 i 為 0 ，只要 i 還 小於 arr.length === 6 就不要停止 for loop，每圈 i + 1
3. 進入 for 迴圈
4. 執行第 4 行，此時 i = 0 ， arr[0] 為 array index 為 0 的值 === 3 ，判斷若小於或等於 ０ 為真 回傳 'invalid
此時不為真，因此不回傳
5. 第 1 次回圈結束再次回到第 3 行，然後 i ++ 變成 1，判斷 arr[1] 是否小於或等於 ０ ，沒有，所以再跑回去一次
6. 第 2 次回圈結束再次回到第 3 行，然後 i ++ 變成 2，判斷 arr[2] 是否小於或等於 ０ ，沒有，所以再跑回去一次
7. 第 3 次回圈結束再次回到第 3 行，然後 i ++ 變成 3，判斷 arr[3] 是否小於或等於 ０ ，沒有，所以再跑回去一次
8. 第 4 次回圈結束再次回到第 3 行，然後 i ++ 變成 4，判斷 arr[4] 是否小於或等於 ０ ，沒有，所以再跑回去一次
9. 第 5 次回圈結束再次回到第 3 行，然後 i ++ 變成 5，判斷 arr[5] 是否小於或等於 ０ ，沒有，所以再跑回去一次
10. 回到第 3 行後發現 i++ 變成 6 ，達到停止條件，目前所有數字都大魚等於零，迴圈還在進行，沒有回傳 'invalid。
11. 跑到第 6 行，宣告一個變數 i 為 2 ，只要 i 還 小於 arr.length === 6 就不要停止 for loop，每圈 i + 1
12. 進入第 7 行，如果 arr[2] 為 array index === 8 不等於 arr[2-1=1] + arr[2-2=0] 回傳 'invalid' ，這圈等於，所以繼續下一圈
13. 跑到第 6 行，i + 1 變為 3 ，只要 3 還 小於 arr.length === 6 就不要停止 for loop
14. 跑到回圈裡面， 如果 arr[3] 為 array index === 13 不等於 arr[3-1=2] + arr[3-2=1] 回傳 'invalid'  ，這圈等於，所以繼續下一圈
15. 跑到第 6 行，i + 1 變為 4 ，只要 4 還 小於 arr.length === 6 就不要停止 for loop
16. 跑到回圈裡面， 如果 arr[4] 為 array index === 22 不等於 arr[4-1=3] + arr[4-2=2] 回傳 'invalid'  ，這圈不等於，所以回傳 'invalid‘ ，離開回圈。

看來應該是在測試是否為 Fibonacci 序列。