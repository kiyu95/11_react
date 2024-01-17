import React from 'react';

const {useState} = React;

function App() {

  // 초기 객체 배열 할당
  const [names, setNames] = useState([
    {id:1, name:'파이널 프로젝트'},
    {id:2, name:'수업내용 복습'}
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChangeHandler = e => setInputText(e.target.value);

  const onClickHandler1 = () => {
    const changeNames = names.concat({
      id: nextId,
      name: inputText
    });
    setNextId(nextId + 1);
    setNames(changeNames);
    setInputText("");
  }
  
  const onClickHandler2 = id => {
    const changeNames = names.filter(name => name.id !== id);
    setNames(changeNames);
  }

  const nameList = names.map(
    name => {
      return (
        <>
          <input type='checkbox' name='id' value={name.id}/>{name.name}
          <button onClick={() => onClickHandler2(name.id)}>삭제</button>
          <br></br>
        </>
        // <input type="checkbox" name="checkBox" value={name.id}>{name.name}</input>
        // <button onClick={onClickHandler2}>삭제</button>
      );
    }
  )


  return (
    <>
      <h1>to do list</h1>
      <ul>
        {nameList}
      </ul>
      <input value={inputText} onChange={onChangeHandler}/>
      <button onClick={onClickHandler1}>추가</button>
    </>
  );
}

export default App;