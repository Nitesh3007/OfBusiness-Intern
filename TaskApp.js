import React, { useState } from "react";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>
      
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <span 
              style={{ textDecoration: task.done ? "line-through" : "none" }}
              onClick={() => {
                const newTasks = [...tasks];
                newTasks[i].done = !task.done;
                setTasks(newTasks);
              }}
            >
              {task.text}
            </span>
            <button onClick={() => setTasks(tasks.filter((_, index) => index !== i))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;