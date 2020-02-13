import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color">add</button>
          <h1 className="header-title">Todo list</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>
        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <butto className="add-btn main-black-color">Add</butto>
          </form>
        </section>
        <section className="todos">
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
