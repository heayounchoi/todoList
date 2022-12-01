import React from 'react';
import styles from '../style/ToDoItem.css';

const ToDoItem = ({todoItem, todoList, setTodoList}) => {
    const onChangeButton = () => {
        const nextTodoList = todoList.map((item) => ({
            ...item,
            checked: item.id === todoItem.id ? !item.checked : item.checked,
        }))
        setTodoList(nextTodoList)
    }

    const onClickDeleteButton = () => {
        const nextTodoList = todoList.map((item) => ({
            ...item,
            deleted: item.id === todoItem.id ? true : item.deleted,
        }))
        setTodoList(nextTodoList)
    }
    return (
        <div className="todoItem">
            <p className="todoTitle">{todoItem.title}:</p>
            <p className="todoBody">{todoItem.body}</p>
            <button className="doneButton"
                type="button"
                onClick={onChangeButton}
            >
                {todoItem.checked ? '취소' : '완료'}
            </button>
            <button className="deleteButton"
                type="button"
                onClick={onClickDeleteButton}
            >
                삭제
            </button>
        </div>
    );
}

export default ToDoItem;
