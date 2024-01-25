import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { searchWork } from "../api/WorkoutApi";
import WorkItem from "../component/WorkItem";

const WorkSearchResult = () => {

    const [search] = useSearchParams();
    const searchWorkName = search.get("postName");
    const [workList, setWorkList] = useState([]);

    useEffect (
        () => {
            setWorkList(searchWork(searchWorkName));
        },[]
    );

    return (
        <>
            <h1>검색 결과</h1>
            <div>
                {workList.map(work => <WorkItem key={work.postCode} work={work}/>)}
            </div>
        </>
    );
}

export default WorkSearchResult;