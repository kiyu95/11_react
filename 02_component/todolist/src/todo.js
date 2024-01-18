import React from 'react';

const {useState} = React;

function Header() {

    return (
        <div className='header'>
            <h1>Today : {new Date().toLocaleDateString()}</h1>
        </div>
    );
}

function TodoItems({todos, setTodos}) {

    const removeTodo = (id) => {
        const removedList = todos.filter(todo => todo.id !== id); // filter() 통과한 요소로만 필터링 시켜 배열을 반환함

        setTodos(removedList);
    }

    const onChangeHandler = (e) => {
        const changeIsDoneList = todos.map(
            (todo) => {
                if(todo.id === parseInt(e.target.id)) {
                    todo.isDone = e.target.checked;
                }

                return todo;
            }
        );

        setTodos(changeIsDoneList);
    }

    return (
        <>
            {
                todos.map(
                    todo => 
                        <p key={todo.id}>
                            <input type='checkbox' id={todo.id} onChange={onChangeHandler}/>
                            <label htmlFor={todo.id} style={ {textDecoration: todo.isDone ? 'line-through' : 'none'} }>{todo.name}</label>
                            <button onClick={ () => removeTodo(todo.id) }>삭제</button>
                        </p>
                )
            }
        </>
    );
}

function TodoList() {

    const [todos, setTodos] = useState([
        {id: 1, name: '자기소개 포트폴리오', isDone: false}
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    }

    const onClickHandler = () => {

        if (inputText === "") {
            alert('입력을 해주세요')
        } else {
            const changeTodos = todos.concat({
                id: nextId,
                name: inputText,
                isDone: false
            });
    
            setInputText('');
            setNextId(nextId + 1);
            setTodos(changeTodos);
        }
    }

    return (
        <>
            <h3>ToDo-List</h3>
            <div className='todo-list'>
                <TodoItems todos={todos} setTodos={setTodos}/>
            </div>
            <div className='append-list'>
                <input type='text' value={inputText} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>추가</button>
            </div>
        </>
    )
}

function Content() {

    return (
        <div className='content'>
            <TodoList/>
        </div>
    );
}

function Footer() {

    return (
        <div className='footer'>
            <p>Copyright 2024. kiyu.Kim all rights reserved.</p>
        </div>
    );
}

function TodoApp() {

    return (
        <div className='container'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default TodoApp;