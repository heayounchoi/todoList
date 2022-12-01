import React, {useState} from "react";
import './App.css';
import InputBox from './components/Input';
import ToDoItemList from './components/ToDoItemList';

const App = () => {
    const [todoList, setTodoList] = useState([])

    return (
        <div className="wrap">
            <InputBox todoList={todoList} setTodoList={setTodoList}/>
            <ToDoItemList
                title={'Working'}
                todoList={todoList}
                setTodoList={setTodoList}
                checkedList={false}
            />
            <ToDoItemList
                title={'Done'}
                todoList={todoList}
                setTodoList={setTodoList}
                checkedList={true}
            />
        </div>
    )
}

export default App;
