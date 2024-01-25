import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWorkList } from "../api/WorkoutApi";
import WorkItem from "../component/WorkItem";

const List = () => {

    const [workList, setWorkList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect (
        () => {
            setWorkList(getWorkList());
        },[]
    );

    const onClickHandler = () => {
        navigate(`/list/search?postName=${searchValue}`);
    }

    return (
        <>
            <h1>운동 목록</h1>
            <div>
                <input type="search" name="workName" onChange={ e => {setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div>
                {workList.map( work => <WorkItem key={work.postCode} work={work}/>)}
            </div>
        </>
    );
}

export default List;