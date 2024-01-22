import { useState } from "react";
/*
    목적 : 많이 연산이 수행되는 문제로 인해 화면에 렌더링이 늦어진다.
    의문 : 그렇다면 setTimeout으로 루프를 막아버리면?
*/

const hardCalculator = (num) => {

    console.log("어려운 계산");

    // for(let i = 0; i < 19999999; i++) {

    // }

    setTimeout( () => {console.log("타임 아웃 종료")}, 3000); // for와는 다르게 이벤트 루프는 영향을 받지 않는다.

    return num + 19999999;
}

const HardCalculator = () => {

    const [hardNumber, setHardNumber] = useState(0);
    const hardSum = hardCalculator(hardNumber);

    return (
        <>
            <h3>어려운 계산기</h3>
            <input type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}/>
            <span>+19999999 = {hardSum}</span>
        </>

    );
}

export default HardCalculator;