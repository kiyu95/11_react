import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { resetloginUser } from "../../modules/UserModule";

const Navbar = () => {

    const loginStatus = !!localStorage.getItem("isLogin"); // !! 이중부정 = 긍정, 이것은 boolean 으로 타입 변환
    const navigate = useNavigate(); // useNavigate : 페이지를 이동할 때 사용 
    // Link를 써도 페이지 이동을 시킬 수 있지만 단순하게 이동만 시켜야 하는 경우 Link를 사용하면 좋고
    // useNavigate를 사용하면 특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 useNavigate를 사용한다.
    const dispatch = useDispatch(); // useDispatch객체를 dispatch로 재선언한 후, dispatch 변수를 활용하여 액션을 호출할 수 있다.

    const logoutHandler = () => {
        localStorage.removeItem("isLogin"); // localStorage에서 isLogin 삭제
        dispatch(resetloginUser()); // res = initialState 수행
        navigate("/");
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/">메인으로</NavLink></li>
                <li><NavLink to="/menu">메뉴보기</NavLink></li>
                {   !loginStatus ? (
                        <li><NavLink to="/login">로그인</NavLink></li>
                    ) : (
                        <li onClick={logoutHandler}><a href="">로그아웃</a></li>
                    )
                }   
            </ul>
        </div>
    )
}

export default Navbar;