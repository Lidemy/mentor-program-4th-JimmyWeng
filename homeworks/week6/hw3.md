## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

<audio> 這個標籤跟 img 很類似，感覺很像早期要聽音樂會用的那種樣子，可以播放聲音檔，一樣用 src 說明路徑。可以設定要不要重複播放等其他操作。

<canvas> 感覺很厲害，可以用來做動畫跟視覺操作。透過 canvas scripting API 和 WebGL API 實作。

<progress> 可以讓你畫進度條，雖然從小就知道進度條都是騙人的。

## 請問什麼是盒模型（box modal）

簡單說就是有四層的一個盒子，可以操控（由內而外）內容 content、內容跟框之間的 padding、框 border 以及跟其他元素關係的 margin。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

inline 就是完全忽略上下的關係而左右只拿 content 的大小，而 block 永遠會換行並且把左右空間吃滿。

而 inline-block 對內像是 inline 對外像是 block。意思就是不會換行，但可以控制上下左右的關係。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

Static: 無法控制，跟著整個 DOM 走。
Relative: 跟著 DOM 走之後，可以根據自己的位置去做上下左右操作。
Absolute: 完全忽略 DOM（所以在網頁上不會留位置給他），會根據上一層來決定位置，可操作上下左右。
Fixed: 網頁上關不掉的那種廣告，就是不管今天網頁怎麼動，都會在視窗某一處的那種。

