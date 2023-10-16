var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
db.defaults({posts: []}).write();
db.set('posts', []).write();
// add post
// db.get('posts')
//      .push({
//         id:1, 
//         cost: 24.20,
//         discountCode: 'APEN23',
//         items: [
//             'books',
//             'food',
//             'clothing'
//         ],})
//      .write()

// db.get('posts')
//     .push({id:3, title: 'new own', published: true})
//     .write()

// db.get('posts')
//     .push({id:4, title: 'random', published: true})
//     .write()

console.log(db.get('posts').value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
