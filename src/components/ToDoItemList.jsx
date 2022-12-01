import React from 'react';
import ToDoItem from "./ToDoItem";
import styles from '../style/ToDoItemList.css';

const ToDoItemList = ({title, todoList, setTodoList, checkedList}) => (
    <div>
        <p className="todoListTitle">{title}</p>
        <ul>
            {todoList &&
                todoList.map((todoItem) => {
                    if (todoItem.deleted) return null

                    if (checkedList !== todoItem.checked) return null

                    return (
                        <ToDoItem
                            key={todoItem.id}
                            todoItem={todoItem}
                            todoList={todoList}
                            setTodoList={setTodoList}
                        />
                    )
                })}
        </ul>
    </div>
);

export default ToDoItemList;