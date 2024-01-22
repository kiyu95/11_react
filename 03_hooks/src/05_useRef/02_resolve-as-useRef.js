import { useRef, useState } from "react";

const UseRefCounter = () => {

    console.log("useRefCounter 렌더링됨");

    const [count, setCount] = useState(0);

    let variable = 0;

    const countRef = useRef(0);

    const increseCount = () => {
        setCount(count + 1);
    }

    const increseVariable = () => {
        variable += 1;
        console.log("variable : " + variable);
    }

    const increseCountRef = () => {
        countRef.current = countRef.current + 1; // countRef.current : useRef의 현재 값
        console.log("countRef : " + countRef.current);
    }

    return (
        <>
            <h1>counter : {count}</h1>
            <h1>variable : {variable}</h1>
            <h1>countRef : {countRef.current}</h1>
            <button onClick={increseCount}>카운트 증가</button>
            <button onClick={increseVariable}>variable 증가</button>
            <button onClick={increseCountRef}>카운트 Ref 증가</button>
        </>
    )
}

export default UseRefCounter;