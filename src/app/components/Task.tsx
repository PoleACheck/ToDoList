import { SingleTask } from "../types";
import styles from "./task.module.scss";

interface TaskProps {
    index: number;
    task: SingleTask;
    onToggleComplete: (index: number) => void;
    onDelete: (index: number) => void;
}
export const Task = ({ index, task, onToggleComplete, onDelete }: TaskProps) => {
    return (
        <div className={styles.task}>
            <button
                className={styles.completeBtn + (task.isCompleted ? " " + styles.completed : "")}
                onClick={() => onToggleComplete(index)}
                aria-label={task.isCompleted ? "Mark as not completed" : "Mark as completed"}
            >
                {task.isCompleted ? "✔" : "○"}
            </button>
            <div className={styles.left}>
                <div className={styles.title + (task.isCompleted ? " " + styles.completed : "")}>{task.title}</div>
                {task.description && (
                    <div className={styles.description + (task.isCompleted ? " " + styles.completed : "")}>{task.description}</div>
                )}
                <div className={styles.status + (task.isCompleted ? " " + styles.completed : "")}>{task.isCompleted ? "Completed" : "Not completed"}</div>
            </div>
            <button
                className={styles.deleteBtn}
                onClick={() => onDelete(index)}
                aria-label="Delete task"
            >
                ×
            </button>
        </div>
    );
};