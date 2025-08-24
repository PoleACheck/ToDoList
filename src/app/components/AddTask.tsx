"use client"
import { FormEvent, useState } from "react"
import { SingleTask } from "../types"
import styles from "./addTask.module.scss"

interface IAddTask {
    createTask:(task:SingleTask)=>void;
}
export const AddTask = ({createTask}:IAddTask) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const onTaskAdded = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: SingleTask = {
            title,
            description,
            isCompleted: false
        };
        createTask(newTask);
        setTitle("");
        setDescription("");
    };
    return (
        <form onSubmit={onTaskAdded} className={styles.form}>
            <label className={styles.label} htmlFor="title">Tytuł</label>
            <input type="text" name="title" id="title" className={styles.input} value={title} onChange={e => setTitle(e.target.value)} maxLength={100}/>
            <label className={styles.label} htmlFor="description">Opis</label>
            <input type="text" name="description" id="description" className={styles.input} value={description} onChange={e => setDescription(e.target.value)} maxLength={1000}/>
            <input type="submit" value="Dodaj" className={styles.button}/>
        </form>
    );
}