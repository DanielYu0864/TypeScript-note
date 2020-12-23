"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    //* res.data has properties of:
    //* uerId
    //* id
    //* title
    //* completed
    //! interface can help to check the syntax and input of obj
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    //  console.log(`
    //  The Todo with ID: ${id}
    //  Has a title of: ${title}
    //  Is it finished? ${completed}
    //  `);
    logTodo(id, title, completed);
});
//*08 Catch more error
//! giving the type for each argument to make sure input arg is correct
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n  ");
};
