import { Link } from "react-router-dom"

const WorkItem = ({work}) => {

    return (
        <Link to={`/list/${work.postCode}`}>
            <div>
                <h3>{work.postName}</h3>
            </div>
        </Link>
    )
}

export default WorkItem;