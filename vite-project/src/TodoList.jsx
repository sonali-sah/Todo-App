import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4(), isDone: false } 
    ]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false }]
        })
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
       
    };

    let deleteTodo = (id) => {
       setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let uppercaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            return {
                ...todo,    
                task: todo.task.toUpperCase(),
            };
        })
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id == id ) {
                    return {
                        ...todo,    
                        isDone: true,
                    };
                } else {
                    return todo;
                } 
        })
        );
    };
    
    return(
        <div>
            <input 
            placeholder="add a task" 
            value={newTodo} 
            onChange={updateTodoValue} 
            />
            <br /><br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br />
            <br /><br />
            <br /><br />
            <hr />

            <h4>Todo List</h4>
            <ul>
                {todos.map((todo) => (
                   <li key={todo.id}> 
                   <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                    {todo.task}
                    </span>
                   &nbsp;&nbsp;&nbsp;
                   <button onClick={() =>deleteTodo(todo.id)}>delete</button>
                   <button onClick={() => markAsDone(todo.id)}>mark As Done</button>
                    </li>
                ))}
            </ul>
            <br/><br/>
            <button onClick={uppercaseAll}>UpperCase All</button>
        </div>
    );
}
