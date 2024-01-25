import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getWorkDetail } from "../api/WorkoutApi";

const WorkDetail = () => {

    const {postCode} = useParams();
    const [work, setWork] = useState({
        postName : '',
        categoryName : '',
        detail : {}
    });

    useEffect (
        () => {
            setWork(getWorkDetail(postCode));
        },[]
    );

    return (
        <>
            <h2>상세 설명</h2>
            <h3>이름 : {work.postName}</h3>
            <h3>카테고리 : {work.categoryName}</h3>
            <h3>설명 : {work.detail.description}</h3>
            {/* <img src={work.detail.image} style={{maxWidth : 500}}/> */}
        </>
    )
}

export default WorkDetail;