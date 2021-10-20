import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Edit } from "./components/Edit";
import { Todos } from "./components/Todos";
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("you are delete todo of ", todo);
    // deleting this way does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("Adding Toto  ", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/Edit">
            <Edit />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/Todos">
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
