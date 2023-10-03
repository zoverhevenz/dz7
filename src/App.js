import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import UserForm from "./components/Form";
import Live from "./components/Live";

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <h1>Home work #7</h1>
          <p>Hello Mr.Atai, there are the 3 my previous home works</p>
        </header>
        <div className="href_btns">
          <a href="/TodoList">Home work#1</a>
          <a href="/Form">Home work#2</a>
          <a href="/Live">Home work#3</a>
        </div>
        <div className="Routes">
          <Routes>
            <Route Component={TodoList} path="TodoList" />
            <Route Component={UserForm} path="Form" />
            <Route Component={Live} path="Live" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
