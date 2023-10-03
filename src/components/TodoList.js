import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
    };
  }

  addTask = () => {
    const { task, tasks } = this.state;
    if (task.trim() !== "") {
      this.setState({
        tasks: [...tasks, task],
        task: "",
      });
    }
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App">
        <h1>TODO</h1>
        <div>
          <input
            type="text"
            placeholder="Введите новую задачу"
            value={task}
            onChange={(e) => this.setState({ task: e.target.value })}
          />
          <button onClick={this.addTask}>Добавить</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
