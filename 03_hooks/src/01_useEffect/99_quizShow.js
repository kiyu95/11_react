import { useEffect, useState } from "react"

const QuizShow = () => {

    let result = "정민식";

    const [input, setInput] = useState('');
    const [isDone, setIsDone] = useState(false);

    const onChangeHandler = (e) => {
        setInput(
            e.target.value
        );
    }

    useEffect( () => {
        if (result == input) {
            setIsDone(true)
        }
    },
    [input]
    );

    useEffect( () => {
        if (isDone == true) {
            alert("정답입니다.")
        }
    },
    [isDone]
    );

    useEffect( () => {
        console.log("환영 체크")
        if (isDone == false) {
            alert("환영합니다.")
        }
    })

    return (
        <>
            <h1>우리반 통은 누구인가요?</h1>
            <br/>
            <input type="text" onChange={onChangeHandler}/>
        </>
    );
}

export default QuizShow;