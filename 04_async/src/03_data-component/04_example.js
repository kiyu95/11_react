/*
    5대리그의 시즌별 순위테이블 조회

    https://api.football-data.org/v4/matches
*/

import { useState } from "react"

const SearchBox = ({setImgUrl}) => {

    const [name, setName] = useState();

    const onChangeHandler = (e) => {

        setName(e.target.value);
    }

    const onClickHandler = () => {

        fetch(`https://robohash.org/${name}`)
            .then(response => response.json())
            .then(result => setImgUrl(result[name]))
        
            // .then(setImgUrl(`https://robohash.org/${name}?set=set2`));
    }

    return (
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>조회</button>
        </>
    )
}

const ImageBox = ({imgUrl}) => {

    return !!imgUrl ? <img src={imgUrl}/>:<h1>무엇이 나올까요?</h1>
}

const Robohash = () => {

    const [imgUrl, setImgUrl] = useState("");

    return (
        <>
            <SearchBox setImgUrl={setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>
        </>
    )
}


export default Robohash;