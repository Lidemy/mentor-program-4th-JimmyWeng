// import 'request'
const request = require('request');
// import 'process'
const process = require('process');

// node document.js 之後的那個就是要帶的參數
const argument = process.argv[2];
const id = process.argv[3];
const str = process.argv[4];

// node hw2.js list // 印出前二十本書的 id 與書名
const list = () => {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const bodyParse = JSON.parse(body);
      for (let i = 0; i < bodyParse.length; i += 1) {
        console.log(`${bodyParse[i].id} ${bodyParse[i].name}`);
      }
    },
  );
};

// node hw2.js read 1 // 輸出 id 為 1 的書籍
const read = (index) => {
  const bookId = index;
  const url = `https://lidemy-book-store.herokuapp.com/books/${bookId}`;
  request(
    url,
    (error, response, body) => {
      // console.log(url)
      // console.log(`error: ${error}`)
      // console.log(`response: ${response}`)
      // console.log(`body: ${body}`)
      // console.log(`typeof body: ${typeof body}`)
      const bodyParse = JSON.parse(body);
      console.log(`${bodyParse.id} ${bodyParse.name}`);
    },
  );
};

// node hw2.js delete 1 // 刪除 id 為 1 的書籍
const deleteId = (index) => {
  const bookId = index;
  const url = `https://lidemy-book-store.herokuapp.com/books/${bookId}`;
  request(
    {
      uri: url,
      method: 'DELETE',
    },
    (error, response, body) => {
      const bodyParse = JSON.parse(body);
      console.log(`${bodyParse.id} ${bodyParse.name}`);
    },
  );
};

// node hw2.js create "I love coding" // 新增一本名為 I love coding 的書
const createNewBook = (newName) => {
  const url = 'https://lidemy-book-store.herokuapp.com/books/';
  request(
    {
      uri: url,
      method: 'POST',
      form: { // 原來如此...
        name: newName,
      },
      // name: newName,
    },
    (error) => {
      if (error !== true) {
        console.log('Success');
      }
    },
  );
};

// node hw2.js update 1 "new name" // 更新 id 為 1 的書名為 new name
const updateNewName = (index, newName) => {
  const url = `https://lidemy-book-store.herokuapp.com/books/${index}`;
  request(
    {
      uri: url,
      method: 'PATCH',
      form: {
        name: newName,
      },
    },
    (error) => {
      if (error !== true) {
        console.log('Sucesss');
      }

      // console.log(error)
    },
  );
};

/*
node hw2.js list // 印出前二十本書的 id 與書名
node hw2.js read 1 // 輸出 id 為 1 的書籍
node hw2.js delete 1 // 刪除 id 為 1 的書籍
node hw2.js create "I love coding" // 新增一本名為 I love coding 的書
node hw2.js update 1 "new name" // 更新 id 為 1 的書名為 new name
*/

switch (argument) {
  // case 'test':
  //   console.log('test works');
  //   break;
  case 'list':
    list();
    break;
  case 'read':
    read(id);
    break;
  case 'delete':
    deleteId(id);
    break;
  case 'create':
    createNewBook(id);
    break;
  case 'update':
    updateNewName(id, str);
    break;
  default:
    console.log('oh no nothing happened');
}
