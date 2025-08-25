"use client";
import styles from "./page.module.scss";
import { Task } from "./components/Task";
import { SingleTask } from "./types";
import { AddTask } from "./components/AddTask";
import { useState } from "react";
const tasks: SingleTask[] = [

];
export default function Home() {
  const [task, setTask] = useState<SingleTask[]>([...tasks]);
  const createTask = (newTask: SingleTask) => {
    setTask([...task, newTask]);
  };
  const toggleComplete = (index: number) => {
    setTask((task) =>
      task.map((t, i) =>
        i === index ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };
  const deleteTask = (index: number) => {
    setTask((task) => task.filter((_, i) => i !== index));
  };
  return (
    <div className={styles.page}>
      <AddTask createTask={createTask} />
      {task.map((task: SingleTask, index) => (
        <Task
          index={index}
          task={task}
          key={index}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}
