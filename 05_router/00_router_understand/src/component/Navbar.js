import { NavLink } from "react-router-dom";

const Navbar = () => {

    const activeStyle = {
        backgroundColor : "orange",
        color : "white"
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink
                        to={"/main"} 
                        style={({isActive}) => isActive ? activeStyle : null}>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/list"}
                        style={({isActive}) => isActive ? activeStyle : null}>
                        운동목록
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;