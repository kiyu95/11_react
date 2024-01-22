import { useEffect, useMemo, useState } from "react"

const LocationComponent = () => {

    const [isKorea, setIsKorea] = useState(true);
    const [number, setNumber] = useState(0);

    console.log("렌더링");

    // 1. 지역 변수에 문자열로 초기화 (number state 변화 시 location에 변화가 없음 (재할당X) - 기본 자료형이므로)
    // const location = isKorea ? "한국" : "와노국";

    // 2. 지역 변수에 객체에 초기화 (number state 변화 시 location에 변화가 있음 (재할당) - 객체의 주소값이므로)
    // const location = {
    //     country : isKorea ? "한국" : "와노국"
    // };

    // 3. 지역 변수에 useMemo의 반환값으로 초기화 (number state 변화 시 location에 변화가 없음 (재할당X) - isKorea가 동일)
    const location = useMemo(() => {
        return {
            country : isKorea ? "한국" : "와노국"
        }
    },[isKorea]);

    useEffect(() => {
        console.log("useEffect 호출");
    }, [location]);

    return (
        <>
            <h2>지금 당신이 있는 위치는?</h2>
            <p>국가: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>국가 토글 하기</button>
            <hr/>
            <h2>좋아하는 숫자를 입력해 주세요</h2>
            <input 
                type="number"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
        </>
    )
}

export default LocationComponent;