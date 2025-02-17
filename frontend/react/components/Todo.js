import { useState } from 'react';

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const startEditTask = (index) => {
        setEditIndex(index);
        setEditTask(tasks[index]);
    };

    const saveEditTask = (index) => {
        const newTasks = tasks.map((task, i) => (i === index ? editTask : task));
        setTasks(newTasks);
        setEditIndex(null);
        setEditTask("");
    };
    return (
        <div className='main'>
            
            <div className="todo-container">
                <h1>Todo Application</h1>
                <div className='input_box'>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task"
                        style={{ width: 'calc(100% - 110px)', padding: '10px', marginRight: '10px' }}
                    />
                    <button onClick={addTask} style={{ padding: '10px' }}>Add Task</button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {editIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTask}
                                        onChange={(e) => setEditTask(e.target.value)}
                                    />
                                    <button onClick={() => saveEditTask(index)}>Save</button>
                                </>
                            ) : (
                                <>
                                    {task}
                                    <button onClick={() => startEditTask(index)}>Edit</button>
                                    <button onClick={() => removeTask(index)}>Remove</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}