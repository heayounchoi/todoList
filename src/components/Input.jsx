import React, {useState} from "react";
import styles from '../style/Input.css';

const InputBox = ({todoList, setTodoList}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeBody = (e) => {
        setBody(e.target.value)
    }

    const onClickAddButton = () => {
        const newTodoList = todoList.concat({
            id: todoList.length,
            title,
            body,
            checked: false,
            deleted: false,
        })
        setTodoList(newTodoList)

        setTitle('')
        setBody('')
    }
    return (
        <div className="inputBox">
            <input className="inputValue"
                type="text"
                value={title}
                placeholder="제목을 입력해주세요"
                onChange={onChangeTitle}
            />
            <input className="inputValue"
                type="text"
                value={body}
                placeholder="내용을 입력해주세요"
                onChange={onChangeBody}
            />
            <button className="addButton"
                type="submit"
                onClick={onClickAddButton}
            >
                추가하기
            </button>
        </div>
    )
}

export default InputBox;