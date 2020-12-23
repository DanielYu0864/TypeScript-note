import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
//* 07: Catching error with TypeScript
//* interface can freely ignore any property from response data
//! giving the type attribute to the interface can help user TS to check data type from api
interface Todo {
  id: number;
  title: string;
  completed: boolean
}

axios.get(url).then(res => {
  //* res.data has properties of:
  //* uerId
  //* id
  //* title
  //* completed

  //! interface can help to check the syntax and input of obj
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
//  console.log(`
  //  The Todo with ID: ${id}
  //  Has a title of: ${title}
  //  Is it finished? ${completed}
//  `);
  logTodo(id, title, completed);
});

//*08 Catch more error
//! giving the type for each argument to make sure input arg is correct
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}