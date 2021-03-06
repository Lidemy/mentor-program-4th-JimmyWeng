## 跟你朋友介紹 Git

 - [ ] P1 你知道 Git 在做什麼，以及為何我們需要 Git
 - [ ] P1 你知道 add、commit、push、pull 等基本 Git 指令
 - [ ] P1 你知道怎麼使用 branch 並送出 Pull Request

菜哥，我對 Git 也不是很熟悉，但我跟據我了解的，盡量解釋給你聽。

#### Git 基本概念
Git 是一個軟體開發常用的版本控制系統，幫助多人有系統地協作。更新或修正多份檔案時，能留下紀錄並管理各種改動，確保開發過程順利。

#### Git 基礎使用
使用 Git 就需要了解 Git 大概有哪些角色。一開始會有一個最穩定完整的主軸，稱為 master 。這記錄著從頭到現在最完整、最新的狀態。以檔案來說可以把它想像成最新改好的那一份檔案。不同的人可能會想修改這個 master 上的不同部分，因此 Git 有 branch 的概念。每個人在做修正之前，可以從當下的時間點創造一個新的分支（平行宇宙的概念），然後在自己的分支上面做修改。因此在未來大家就算不是同步的去做檔案的更新，也能確保那些修正回到 master 這個原先的主軸上，都是被確認過的。
	簡單說：一個檔案，隨時有最正確的那份，在 master 上。大家不同時間想修改的時候，先從 master 拿一個最新的，然後各自開一個新的分支，確保不會直接更動到原始的。之後做的修正，要再整理回去 master 上面。 Git 因為有持續地針對每一個修正做紀錄，因此會協助整理回去 master 的過程中各種狀況排除。

訂正：這邊保留原始寫的，不過根據自我檢討描述，master 只是「預設的branch」或者最主要的 branch，並不是「最新的 branch」。
補充：原來 PR 之後，我如果 commit 之後再 push，GitHub 會自動更新。剛剛要更新這個檔案的時候在想這個問題立刻在自我檢討裡看到。

#### Git 各種指令
大概說明一下基本指令。

`git add .`
大部分指令前面都有 git 而 add 就是跟 git 這個系統說：請幫我紀錄這個檔案的變化。如果你想要追蹤手邊「所有」在改動的檔案，就在後面放一個小小的英文句點「.」，這樣就會通通幫你追蹤。
	
`git commit`
基本上就是前面你決定 add 哪些，幫你做一個總結。舉例來說，你可能正在改 a, b, c 三個檔案。其實你也可以不全 add ，只要用 git add a 就只會追蹤 a ，然後 b 跟 c 會被忽略。而如果你用上面的指令 git add . 那 a, b , c 通通都會被追蹤。而此時你做 git commit 的話， a, b ,c 就會通通一起被 commit 。此時這個狀態（我自己想成存擋的感覺）就會被記錄下來。
	
`git push`
當然，你可能一直在自己的電腦上做很多修改，追蹤了這些檔案，然後又做了 commit 來記錄狀態。此時只有你看得到，如果你希望可以讓遠端其他人也看到的話，就要用 git push 。可以把它想成，同步雲端上的資料這樣的感覺。
	
`git pull`
而這就是如果你之前把雲端的資料拿下來看，但不知道現在有沒有人做更動，想要看到最新的。 Git pull 就是這樣的指令。更新成最新版的概念。
	
`git diff` 
剛查到這個感覺頗實用。會顯示還沒有 staged （應該是按完 add 但還沒 commit 的中間狀態）的檔案差異（或變動）。
也可以改成 git diff -staged 來顯示已經 stagged 的檔案跟最新版本的檔案差異。
如果改成 git diff [某個 branch] [另外一個 branch] 就會比較兩個分支間的檔案差異。

