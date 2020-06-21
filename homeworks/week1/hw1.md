## 交作業流程

- [ ] P2 你熟悉 Git Workflow（其實就是交作業的流程）

請用文字一步步敘述應該如何交作業。
範例：
1. 新開一個 branch：git branch hw1
2. 切換到 branch：git checkout hw1
請將答案寫在 hw1.md。

#### 交作業流程  
* 使用 git clone huli 的 repository
* 使用 git branch 產出一個新的 branch 叫做 week1
* 使用 git checkout branch week1 切換過去新的 branch
* 使用 vim 開啟檔案 hw1.md
* 寫完後 :wq 儲存
* 每一次修改完檔案，可以 git check status 確認檔案有無被 track
* 若無，使用 git add hw1.md 就可以
* 接著使用 git commit -am 'xxxxx' 紀錄這個瞬間
* 其他作業用一樣流程
* 最後全部都寫完 git status 再看一下，把需要 track 的都 git add，然後就 commit
* 使用 git push 把作業推上去
* 到這邊就有點卡住，了解到 syntax 長這樣 git push <REMOTENAME> <BRANCHNAME> 所以才需要指定 origin，使用 git push origin 'week1'
* 後面這裡就有點困惑，所以決定看看共筆，後面這裡參考[如何交作業note](https://www.notion.so/ruofanwei/d7fca2c2b27e4624b8621658ebc9944d) by ruofan
* 接著就需要使用 GitHub 介面才能處理，點選 pull request
* 點選 compare & pull request
* create pull request 一直搞不懂為什麼我已經 push 了還要 pull，看了[這篇](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)才意識到，我其實是從 local 端把我的東西 push 到我的遠端 repo，接著要去跟 huli 的遠端 repo 要求 pull request。節錄：Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.
* 接著要看自我檢測，等等看完自我檢測繼續完成後面步驟。

#### 問題請教

1. 剛剛才意識到是不是應該每個作業都開一個 branch 比較好？有什麼原因嗎？
2. 使用 vim 直接在 iTerm 裡面寫好像不是特別方便（例如切換 md 觀看），有推薦的做法嗎？(例如是不是應該用某個 IDE 寫？)
