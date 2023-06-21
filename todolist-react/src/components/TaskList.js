import { useEffect, useState } from "react"
import SingleTodo from "./tasklistcomps/SingleTodo";
import TextField from "./tasklistcomps/TextField";
import AddButton from "./tasklistcomps/AddButton";
import ClearButton from "./tasklistcomps/ClearButton";
import arrowpic from "./tasklistcomps/images/arrow.png"


const TaskList = () => {
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState(() => {
        const getSavedTasks = localStorage.getItem("tasks");
        const savedTasks = JSON.parse(getSavedTasks);
        return savedTasks || [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div>
            <div>
                <h1 className="h1">To-Do List</h1>
                <TextField text={text} setText={setText} />
                <AddButton text={text} setText={setText} todoList={todoList} setTodoList={setTodoList} />
            </div>
            <br />
            <div >
                {todoList.length > 0 && todoList.filter((todo) => todo.status == '1').map((todo) => (
                    <SingleTodo todo={todo} todoList={todoList} setTodoList={setTodoList} key={todo.id} />
                ))}
                <br></br>
                <ClearButton setTodoList={setTodoList} />
            </div>
            <div>
                <h1 className="h1">Completed Tasks <img className="arrow" src={arrowpic} alt="Arrow Icon" /> </h1>
                <div className="completed">
                    {todoList.length > 0 && todoList.filter((todo) => todo.status == '0').map((todo) => (
                        <SingleTodo todo={todo} todoList={todoList} setTodoList={setTodoList} key={todo.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TaskList;